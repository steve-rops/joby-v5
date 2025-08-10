import { useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateUserMetadata = () => {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { data, mutate, isPending } = useMutation({
    mutationFn: async ({ title, url, jobId }) => {
      if (!user) throw new Error("User not authenticated");

      const currentLiked = user.unsafeMetadata?.liked || [];
      const currentlyLiked = currentLiked.some((job) => job.id === jobId);

      const updatedLiked = currentlyLiked
        ? currentLiked.filter((job) => job.id !== jobId) // Unlike
        : [...currentLiked, { title, url, id: jobId }]; // Like

      await user.update({
        unsafeMetadata: {
          ...user.unsafeMetadata,
          liked: updatedLiked,
        },
      });

      return { jobId, updatedLiked, currentlyLiked };
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  return { data, mutate, isPending };
};

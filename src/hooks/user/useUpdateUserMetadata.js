import { useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateUserMetadata = () => {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const { data, mutate, isPending } = useMutation({
    mutationFn: async ({ jobId, currentlyLiked }) => {
      if (!user) throw new Error("User not authenticated");

      const currentLiked = user.unsafeMetadata?.liked || [];

      let updatedLiked;
      if (currentlyLiked) {
        updatedLiked = currentLiked.filter((id) => id !== jobId);
      } else {
        updatedLiked = [...currentLiked, jobId];
      }

      await user.update({
        unsafeMetadata: {
          ...user.unsafeMetadata,
          liked: updatedLiked,
        },
      });

      return { jobId, updatedLiked };
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  return { data, mutate, isPending };
};

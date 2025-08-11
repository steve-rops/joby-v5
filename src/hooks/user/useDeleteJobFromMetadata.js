import { useUser } from "@clerk/clerk-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteJobFromMetadata = () => {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const { data, mutate } = useMutation({
    mutationKey: ["delete-liked"],
    mutationFn: async (jobId) => {
      if (!user) throw new Error("User not authenticated");

      const likedJobs = user.unsafeMetadata?.liked;
      let updatedJobs;

      try {
        updatedJobs = await user.update({
          unsafeMetadata: {
            liked: likedJobs.filter((job) => job.id !== jobId),
          },
        });
      } catch (error) {
        if (error) {
          console.error("There was an error deleting jobs");
        }

        return updatedJobs;
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries(["user"]);
    },
  });

  return { data, mutate };
};

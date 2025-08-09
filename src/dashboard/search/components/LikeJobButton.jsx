import { useUpdateUserMetadata } from "@/hooks/user/useUpdateUserMetadata";
import { useUser } from "@clerk/clerk-react";
import { HeartIcon } from "lucide-react";

export const LikeJobButton = ({ id }) => {
  const { user } = useUser();
  const { mutate, isPending } = useUpdateUserMetadata();

  const likedJobs = user?.unsafeMetadata?.liked || [];
  const isLiked = likedJobs.includes(id);

  const handleClick = () => {
    if (!user || isPending) return;

    mutate({
      jobId: id,
      currentlyLiked: isLiked,
    });
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {isLiked ? (
        <HeartIcon className="text-red-500 fill-red-500" />
      ) : (
        <HeartIcon />
      )}
    </div>
  );
};

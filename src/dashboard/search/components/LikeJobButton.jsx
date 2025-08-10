import { useUpdateUserMetadata } from "@/hooks/user/useUpdateUserMetadata";
import { useUser } from "@clerk/clerk-react";
import { HeartIcon } from "lucide-react";

export const LikeJobButton = ({ title, id, url }) => {
  const { mutate, isPending } = useUpdateUserMetadata();

  const { user } = useUser();

  const likedJobs = user?.unsafeMetadata?.liked || [];
  const isLiked = likedJobs.some((job) => job.id === id);

  const handleClick = () => {
    if (isPending) return;

    mutate({
      title,
      url,
      jobId: id,
    });
  };

  if (isPending) return <HeartIcon className="fill-accent" />;

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

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { Link } from "react-router";

export const Liked = () => {
  const { user } = useUser();
  const { liked } = user?.unsafeMetadata || [];

  console.log(liked);

  return (
    <div className="space-y-4">
      {liked.map((job) => (
        <div className="border p-2 rounded-lg space-y-2 ">
          <div className="text-lg">{job.title}</div>
          <Link to={job.url} target="_blank">
            <Button className="w-full text-xs" size="sm">
              Learn More
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

import { Button } from "@/components/ui/button";
import { useDeleteJobFromMetadata } from "@/hooks/user/useDeleteJobFromMetadata";
import { useUser } from "@clerk/clerk-react";
import { Trash, Trash2 } from "lucide-react";
import { Link } from "react-router";

export const Liked = () => {
  const { user } = useUser();
  const { mutate: deleteJob } = useDeleteJobFromMetadata();
  const { liked } = user?.unsafeMetadata || [];

  return (
    <div className="space-y-4">
      {liked.map((job) => (
        <div key={job.id} className="border p-4 rounded-lg space-y-4 ">
          <div className="flex justify-between gap-4">
            <div className="text-lg">{job.title}</div>
            <div>
              <Trash2
                onClick={() => deleteJob(job.id)}
                className="text-red-600 w-5 h-5"
              />
            </div>
          </div>
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

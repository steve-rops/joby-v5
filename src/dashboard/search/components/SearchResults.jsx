import { Button } from "@/components/ui/button";
import { useGetJobs } from "@/hooks/jobs/useGetJobs";
import { isNew } from "@/lib/utils";
import { Circle, HeartIcon, MapPin, Pin } from "lucide-react";

export const SearchResults = () => {
  const { filteredData } = useGetJobs();
  return (
    <div className="space-y-4">
      <h3 className="text-lg text-foreground/75 font-semibold">
        Search Results
      </h3>
      <div className="space-y-2 md:grid md:grid-cols-2 gap-2">
        {filteredData.map((job) => (
          <SingleJobListing key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

const SingleJobListing = ({ job }) => {
  return (
    <div className="p-4 border rounded-lg shadow-xs flex flex-col justify-between">
      <div>
        <div className="flex justify-between">
          <div className="w-[75%]">
            {job.title} @{" "}
            <span className="text-primary/85">{job.company.display_name}</span>
          </div>

          <HeartIcon />
        </div>
        <div className="flex gap-1 items-center text-muted-foreground/70">
          <MapPin width={14} height={14} />
          <span className="text-xs">{job.location.display_name}</span>
        </div>
      </div>

      <div>
        <div className="mt-4 flex gap-1 items-center">
          <Circle width={10} height={10} className="text-green-500" />
          {job.salary_max && (
            <span className="text-xs text-foreground">
              ~ {job.salary_max} /yr
            </span>
          )}
        </div>
        <div className="mt-2 flex gap-2">
          {job.contract_time === "full_time" && (
            <span className="px-2 border rounded-xl text-muted-foreground text-xs">
              full-time
            </span>
          )}
          {job.contract_type === "permanent" && (
            <span className="px-2 border rounded-xl text-muted-foreground text-xs">
              permanent
            </span>
          )}
          {isNew(job.created) && (
            <div className="px-1 h-fit p-1 rounded-full text-xs flex items-center text-green-800 bg-green-300">
              NEW
            </div>
          )}
        </div>
      </div>

      <div className="mt-2">
        <Button variant="outline" className="w-full">
          Learn more
        </Button>
      </div>
    </div>
  );
};

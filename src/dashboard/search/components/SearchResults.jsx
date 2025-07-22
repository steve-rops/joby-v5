import { useGetJobs } from "@/hooks/jobs/useGetJobs";
import { isNew } from "@/lib/utils";

export const SearchResults = () => {
  const { data } = useGetJobs();
  console.log(data);
  return (
    <div className="space-y-4">
      <h3 className="text-lg text-foreground/75 font-semibold">
        Search Results
      </h3>
      <div className="space-y-2">
        {data.map((job) => (
          <SingleJobListing key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

const SingleJobListing = ({ job }) => {
  return (
    <div className="p-4 border rounded-lg shadow-xs">
      <div className="flex justify-between">
        <div>
          {job.title} @{" "}
          <span className="text-primary/85">{job.company.display_name}</span>
        </div>

        {isNew(job.created) && (
          <div className="px-1 rounded-full text-xs flex items-center text-green-800 bg-green-300">
            NEW
          </div>
        )}
      </div>
    </div>
  );
};

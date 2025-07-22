import { getJobs } from "@/data/jobs/get-Jobs";
import { useCountryStore } from "@/data/stores/country-store";
import { useSearchQueryStore } from "@/data/stores/searchQuery-store";
import { useSuspenseQuery } from "@tanstack/react-query";

export const useGetJobs = () => {
  const country = useCountryStore((state) => state.country);
  const searchQuery = useSearchQueryStore((state) => state.searchQuery);
  const { data } = useSuspenseQuery({
    queryKey: ["jobs", country, searchQuery],
    queryFn: () => getJobs(searchQuery, country),
  });

  return { data };
};

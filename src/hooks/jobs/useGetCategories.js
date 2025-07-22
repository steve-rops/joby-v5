import { useSuspenseQuery } from "@tanstack/react-query";
import { getCategories } from "../../data/jobs/get-Categories";
import { useCountryStore } from "../../data/stores/country-store.js";

export const useGetCategories = () => {
  const countryCode = useCountryStore((state) => state.country);
  const { data: _data, isLoading } = useSuspenseQuery({
    queryKey: ["job_categories", countryCode],
    queryFn: () => getCategories(countryCode),
  });

  const data = _data.map((job) => ({
    tag: job.tag,
    label: job.label.replace("Jobs", "").trim(),
  }));
  return { data, isLoading };
};

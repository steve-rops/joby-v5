import { getJobs } from "@/data/jobs/get-Jobs";
import { useCountryStore } from "@/data/stores/country-store";
import { useSearchQueryStore } from "@/data/stores/searchQuery-store";
import { findTheMostMoney } from "@/lib/utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export const useGetJobs = () => {
  const [searchParams] = useSearchParams();
  const country = useCountryStore((state) => state.country);
  const searchQuery = useSearchQueryStore((state) => state.searchQuery);
  const { data: fetchedData } = useSuspenseQuery({
    queryKey: ["jobs", country, searchQuery],
    queryFn: () => getJobs(searchQuery, country),
  });

  const mostMoney = findTheMostMoney(fetchedData);

  const sort = searchParams.get("sort") || "recent";
  const jobType = searchParams.get("jobType")?.split(",") || [];
  const min = Number(searchParams.get("minSalary")) || 0;
  const max = Number(searchParams.get("maxSalary")) || mostMoney;

  // 1. Add liked boolean as an attribute
  const addedLikedAttData = fetchedData?.map((item) => ({
    ...item,
    liked: item.liked ?? false,
  }));

  // 2. sort
  const sortedData = addedLikedAttData.slice().sort((a, b) => {
    switch (sort) {
      case "recent":
        return new Date(b.created).getTime() - new Date(a.created).getTime();
      case "alphabetical":
        return a.title.localeCompare(b.title);
      case "salary":
        return a.salary_max - b.salary_max;
      case "rating":
        return 0;
    }
  });

  // 3. Add salary restrictions
  const dataWithSalaryResitrictions = sortedData.filter(
    (item) => item.salary_max >= min * 1000 && item.salary_max <= max * 1000
  );

  // 4. filter Jobs
  const refinedJobType = jobType.map((type) => type.toLowerCase());
  const filteredData = dataWithSalaryResitrictions.filter((item) =>
    refinedJobType.length === 0
      ? true
      : refinedJobType.includes(
          item.contract_time?.split("_").join("").toLowerCase()
        ) ||
        refinedJobType.includes(
          item.contract_type?.split("_").join("").toLowerCase()
        )
  );

  return { filteredData, fetchedData };
};

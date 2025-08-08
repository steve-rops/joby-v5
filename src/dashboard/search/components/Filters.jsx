import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button.jsx";
import { useNavigate, useSearchParams } from "react-router";
import { useGetJobs } from "@/hooks/jobs/useGetJobs.js";
import { findTheMostMoney } from "@/lib/utils.js";

export const Filters = () => {
  const { fetchedData } = useGetJobs();
  const [mostMoney, _setMostMoney] = useState(() =>
    Math.ceil(findTheMostMoney(fetchedData) / 1000)
  );

  const MIN = 0;
  const MAX = mostMoney;

  const initialFIlters = {
    sortBy: "",
    salaryRange: { min: 50, max: MAX },
    jobType: [],
  };

  const navigate = useNavigate();
  const [filters, setFilters] = useState(initialFIlters);
  const [searchParams] = useSearchParams();

  const handleMinChange = (e) => {
    const value = Math.min(
      Number(e.target.value),
      filters.salaryRange.max - 10
    );
    setFilters((filters) => ({
      ...filters,
      salaryRange: { ...filters.salaryRange, min: value },
    }));
  };

  const handleMaxChange = (e) => {
    const value = Math.max(
      Number(e.target.value),
      filters.salaryRange.min + 10
    );
    setFilters((filters) => ({
      ...filters,
      salaryRange: { ...filters.salaryRange, max: value },
    }));
  };

  const handleReset = (e) => {
    e.preventDefault();
    navigate("/dashboard/search");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const sortBy = formData.get("sort");
    const jobType = formData.getAll("jobType");
    const minSalary = Number(formData.get("minSalary"));
    const maxSalary = Number(formData.get("maxSalary"));

    const params = new URLSearchParams();
    if (sortBy) params.set("sort", sortBy);
    if (jobType.length > 0) params.set("jobType", jobType.join(","));
    if (minSalary) params.set("minSalary", minSalary);
    if (maxSalary) params.set("maxSalary", maxSalary);

    navigate("/dashboard/search?" + params.toString());

    setFilters({
      sortBy,
      jobType,
      salaryRange: { min: minSalary, max: maxSalary },
    });
    // Here you would typically trigger a search or update the state in a parent component
  };

  useEffect(() => {
    const sort = searchParams.get("sort") || "recent";
    const jobType = searchParams.get("jobType")?.split(",") || [];
    const min = Number(searchParams.get("minSalary")) || MIN;
    const max = Number(searchParams.get("maxSalary")) || MAX;

    setFilters({
      sortBy: sort,
      jobType,
      salaryRange: { min, max },
    });
  }, [searchParams]);

  return (
    <form
      onReset={handleReset}
      onSubmit={handleSubmit}
      className="hidden md:flex md:flex-col border rounded-lg p-3 h-fit sticky top-4 "
    >
      <h3 className="text-2xl text-primary">Filters</h3>
      <hr className="my-1" />

      <div className="space-y-8">
        {/* sortBy */}
        <div className="">
          <p className="font-bold text-lg my-2">Sort By</p>
          <div className="grid grid-cols-2 gap-2 text-muted-foreground/75">
            <div className="flex items-center gap-2">
              <input
                checked={filters.sortBy === "recent"}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
                }
                className="peer"
                type="radio"
                id="recent"
                name="sort"
                value="recent"
              />
              <label className="peer-checked:text-black" htmlFor="recent">
                Recently
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                checked={filters.sortBy === "alphabetical"}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
                }
                className="peer"
                type="radio"
                id="alphabetical"
                name="sort"
                value="alphabetical"
              />
              <label className="peer-checked:text-black" htmlFor="alphabetical">
                A-Z
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                checked={filters.sortBy === "salary"}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
                }
                className="peer"
                type="radio"
                id="salary"
                name="sort"
                value="salary"
              />
              <label className="peer-checked:text-black" htmlFor="salary">
                Salary
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input
                checked={filters.sortBy === "rating"}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, sortBy: e.target.value }))
                }
                className="peer"
                type="radio"
                id="rating"
                name="sort"
                value="rating"
              />
              <label className="peer-checked:text-black" htmlFor="rating">
                Rating
              </label>
            </div>
          </div>
        </div>

        {/* range salary */}
        <div className="">
          <p className="font-bold text-lg">Salary Range</p>

          <div className="relative h-8 flex items-center">
            {/* Background track */}
            <div className="absolute w-full h-2 bg-muted rounded-full" />

            {/* Active range highlight */}
            <div
              className="absolute h-2 bg-primary rounded-full"
              style={{
                left: `${(filters.salaryRange.min / MAX) * 100}%`,
                width: `${
                  ((filters.salaryRange.max - filters.salaryRange.min) / MAX) *
                  100
                }%`,
              }}
            />

            {/* Min slider */}
            <input
              name="minSalary"
              type="range"
              min={MIN}
              max={MAX}
              value={filters.salaryRange.min}
              onChange={handleMinChange}
              className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb pointer-events-none"
              style={{ zIndex: 20 }}
            />

            {/* Max slider */}
            <input
              name="maxSalary"
              type="range"
              min={MIN}
              max={MAX}
              value={filters.salaryRange.max}
              onChange={handleMaxChange}
              className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb pointer-events-none"
              style={{ zIndex: 21 }}
            />
          </div>

          {/* Value indicators */}
          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <span>${filters.salaryRange.min}k</span>
            <span>${filters.salaryRange.max}k</span>
          </div>
        </div>

        {/* Job Type */}
        <div>
          <p className="font-bold text-lg my-2">Job Type</p>
          <div className="grid grid-cols-2 gap-2 text-muted-foreground/75">
            <div className="flex items-center gap-1">
              <input
                checked={filters.jobType.includes("remote")}
                onChange={(e) => {
                  setFilters((prev) => {
                    const newJobType = e.target.checked
                      ? [...prev.jobType, e.target.value]
                      : prev.jobType.filter((type) => type !== e.target.value);
                    return { ...prev, jobType: newJobType };
                  });
                }}
                type="checkbox"
                name="jobType"
                id="remote"
                value="remote"
                className="peer"
              />
              <label className="peer-checked:text-black" htmlFor="remote">
                Remote
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                checked={filters.jobType.includes("partTime")}
                onChange={(e) => {
                  setFilters((prev) => {
                    const newJobType = e.target.checked
                      ? [...prev.jobType, e.target.value]
                      : prev.jobType.filter((type) => type !== e.target.value);
                    return { ...prev, jobType: newJobType };
                  });
                }}
                type="checkbox"
                name="jobType"
                id="partTime"
                value="partTime"
                className="peer"
              />
              <label className="peer-checked:text-black" htmlFor="partTime">
                Part-time
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                checked={filters.jobType.includes("fullTime")}
                onChange={(e) => {
                  setFilters((prev) => {
                    const newJobType = e.target.checked
                      ? [...prev.jobType, e.target.value]
                      : prev.jobType.filter((type) => type !== e.target.value);
                    return { ...prev, jobType: newJobType };
                  });
                }}
                type="checkbox"
                name="jobType"
                id="fullTime"
                value="fullTime"
                className="peer"
              />
              <label className="peer-checked:text-black" htmlFor="fullTime">
                Full-time
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                checked={filters.jobType.includes("internship")}
                onChange={(e) => {
                  setFilters((prev) => {
                    const newJobType = e.target.checked
                      ? [...prev.jobType, e.target.value]
                      : prev.jobType.filter((type) => type !== e.target.value);
                    return { ...prev, jobType: newJobType };
                  });
                }}
                type="checkbox"
                name="jobType"
                id="internship"
                value="internship"
                className="peer"
              />
              <label className="peer-checked:text-black" htmlFor="internship">
                Internship
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-8 w-full flex items-center gap-1 ">
        <Button type="reset" className="w-1/2" variant="outline">
          Clear
        </Button>
        <Button type="submit" className="w-1/2">
          Apply
        </Button>
      </div>
    </form>
  );
};

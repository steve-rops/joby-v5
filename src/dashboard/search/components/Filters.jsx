import { useState } from "react";
import { Button } from "../../../components/ui/button.jsx";
export const Filters = () => {
  const [minSalary, setMinSalary] = useState(50);
  const [maxSalary, setMaxSalary] = useState(200);

  const MIN = 0;
  const MAX = 350;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxSalary - 10);
    setMinSalary(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minSalary + 10);
    setMaxSalary(value);
  };

  return (
    <div className="hidden md:flex md:flex-col border rounded-lg p-3 h-fit sticky top-4 ">
      <h3 className="text-2xl text-primary">Filters</h3>
      <hr className="my-1" />

      <div className="space-y-8">
        {/* sortBy */}
        <div className="">
          <p className="font-bold text-lg my-2">Sort By</p>
          <div className="grid grid-cols-2 gap-2 text-muted-foreground/75">
            <div className="flex items-center gap-2">
              <input
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
                className="peer"
                type="radio"
                id="rating"
                name="sort"
                value="rating"
              />
              <label className="peer-checked:text-black" htmlFor="rating">
                Salary
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
                left: `${(minSalary / MAX) * 100}%`,
                width: `${((maxSalary - minSalary) / MAX) * 100}%`,
              }}
            />

            {/* Min slider */}
            <input
              type="range"
              min={MIN}
              max={MAX}
              value={minSalary}
              onChange={handleMinChange}
              className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb pointer-events-none"
              style={{ zIndex: 20 }}
            />

            {/* Max slider */}
            <input
              type="range"
              min={MIN}
              max={MAX}
              value={maxSalary}
              onChange={handleMaxChange}
              className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb pointer-events-none"
              style={{ zIndex: 21 }}
            />
          </div>

          {/* Value indicators */}
          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <span>${MIN}k</span>
            <span>${MAX}k</span>
          </div>
        </div>

        {/* Job Type */}
        <div>
          <p className="font-bold text-lg my-2">Job Type</p>
          <div className="grid grid-cols-2 gap-2 text-muted-foreground/75">
            <div className="flex items-center gap-1">
              <input
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
        <Button className="w-1/2" variant="outline">
          Clear
        </Button>
        <Button className="w-1/2">Apply</Button>
      </div>
    </div>
  );
};

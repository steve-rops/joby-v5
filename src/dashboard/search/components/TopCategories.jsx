import { getCategoryIcon } from "@/data/jobs/get-CategoryIcon";
import { useSearchQueryStore } from "@/data/stores/searchQuery-store";
import { useGetCategories } from "@/hooks/jobs/useGetCategories";

export const TopCategories = () => {
  const { data } = useGetCategories();
  const topCategories = data.slice(0, 15);

  return (
    <div className="py-4">
      <h3 className="text-lg text-foreground/75 font-semibold">
        Top Categories
      </h3>
      <div className="relative h-20">
        <div className="absolute w-full">
          <div className="overflow-x-scroll flex flex-nowrap gap-2 p-3">
            {topCategories.map((cat, index) => (
              <Category key={index} cat={cat} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const TopCategoriesSkeleton = () => {
  return (
    <div className="py-4">
      <h3 className="text-xl font-semibold">Top Categories</h3>
      <div className="relative h-20">
        <div className="absolute w-full">
          <div className="overflow-x-scroll flex flex-nowrap gap-2 p-3">
            {Array.from({ length: 10 }).map((_, index) => (
              <p
                key={index}
                className="p-4 bg-muted animate-pulse flex-shrink-0 w-48 border rounded-xl"
              >
                {/* Empty content to simulate skeleton */}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Category = ({ cat }) => {
  const setSearchQuery = useSearchQueryStore((state) => state.setSearchQuery);
  const icon = getCategoryIcon(cat.tag, "text-sm w-4 h-4");
  const handleClick = () => {
    setSearchQuery(cat.label);
  };

  return (
    <div
      onClick={handleClick}
      className="p-2 flex-shrink-0 w-fit border rounded-xl hover:cursor-pointer"
    >
      <div className=" flex gap-1 items-center">
        <div className="bg-primary/30 p-1 rounded-lg w-fit">
          <span className="text-primary">{icon}</span>
        </div>
        <p className="text-sm">{cat.label}</p>
      </div>
    </div>
  );
};

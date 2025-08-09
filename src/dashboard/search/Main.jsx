import { Suspense } from "react";
import { SearchBar } from "./components/SearchBar.jsx";
import {
  TopCategories,
  TopCategoriesSkeleton,
} from "./components/TopCategories.jsx";
import { SearchResults } from "./components/SearchResults.jsx";

export const Main = () => {
  return (
    <div>
      <SearchBar />
      <Suspense fallback={<TopCategoriesSkeleton />}>
        <TopCategories />
      </Suspense>

      <Suspense fallback={<div className="mx-auto py-4 loader"></div>}>
        <SearchResults />
      </Suspense>
    </div>
  );
};

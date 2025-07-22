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

      <Suspense fallback={<div>Loading...</div>}>
        <SearchResults />
      </Suspense>
    </div>
  );
};

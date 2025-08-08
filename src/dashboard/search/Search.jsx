import { Suspense } from "react";
import { Filters } from "./components/Filters";
import { Main } from "./Main";

export const Search = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[25%_1fr] md:gap-4">
      <Suspense fallback={<div>Loading...</div>}>
        <Filters />
      </Suspense>
      <Main />
    </div>
  );
};

import { Suspense } from "react";
import { Filters } from "./components/Filters";
import { Main } from "./Main";

export const Search = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[25%_1fr] md:gap-4">
      <Suspense fallback={<div className="loader"></div>}>
        <Filters
          className={
            "hidden md:flex md:flex-col border rounded-lg p-3 h-fit sticky top-4"
          }
          screen="big"
        />
      </Suspense>
      <Main />
    </div>
  );
};

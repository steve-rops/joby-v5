import { Filters } from "./components/Filters";
import { Main } from "./Main";

export const Search = () => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-[25%_1fr] md:gap-4">
      <Filters />
      <Main />
    </div>
  );
};

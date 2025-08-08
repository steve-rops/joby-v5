import { useEffect, useState } from "react";
import { Button } from "../../../components/ui/button";
import { CountrySelection } from "./CountrySelection";
import { Input } from "@/components/ui/input";
import { useSearchQueryStore } from "@/data/stores/searchQuery-store";

export const SearchBar = () => {
  const setSearchValue = useSearchQueryStore((state) => state.setSearchQuery);
  const searchQuery = useSearchQueryStore((state) => state.searchQuery);
  const [inputValue, setInputValue] = useState(searchQuery);

  const handleClick = () => {
    if (searchQuery === inputValue) return;
    setSearchValue(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  useEffect(() => {
    setInputValue(searchQuery);
  }, [searchQuery]);

  return (
    <div className="space-y-4 ">
      <div className=" w-full flex items-center gap-2">
        <div className="flex items-center flex-1">
          <CountrySelection className="rounded-r-none hidden md:flex" />
          <Input
            placeholder="Search any job..."
            className="md:rounded-l-none focus-visible:ring-0 focus-visible:border-muted placeholder:text-muted-foreground/75 border-muted-foreground/40"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
        <Button onClick={handleClick}>Search</Button>
      </div>
    </div>
  );
};

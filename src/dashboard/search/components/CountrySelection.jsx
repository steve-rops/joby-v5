import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { CheckIcon, ChevronsUpDownIcon } from "lucide-react";
import { countries } from "../../../data/countries";
import { useCountryStore } from "@/data/stores/country-store";

export const CountrySelection = ({ className }) => {
  const countryCode = useCountryStore((state) => state.country);
  const setCountry = useCountryStore((state) => state.setCountry);
  const [open, setOpen] = useState(false);

  const handleCountrySelection = (currentValue) => {
    setCountry(currentValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn("w-[200px] justify-between ", className)}
        >
          {countryCode
            ? countries.find((country) => country.code === countryCode)?.name
            : "Select country..."}
          <ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.name}
                  value={country.code}
                  onSelect={(currentValue) =>
                    handleCountrySelection(currentValue)
                  }
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      countryCode === country.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {country.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

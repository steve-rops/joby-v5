import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const BubbleDropdown = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // Close dropdown after clicking
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger className="w-full outline-none">
        <div className="flex items-center justify-center gap-1">
          <span>Navigation</span>
          <ChevronDown
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48">
        <DropdownMenuItem onClick={() => scrollToSection("home")}>
          Home
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => scrollToSection("about")}>
          About
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => scrollToSection("services")}>
          Services
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => scrollToSection("contact")}>
          Contact
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

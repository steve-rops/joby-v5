import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Filters } from "@/dashboard/search/components/Filters";
import { useState } from "react";

export const CustomDrawer = ({ children, className }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={className}>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{children}</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="">
            <DrawerTitle className="text-2xl text-primary">Filters</DrawerTitle>
          </DrawerHeader>
          <Filters className="p-4" setOpen={setOpen} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

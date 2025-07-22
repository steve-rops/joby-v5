import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { NavMenu } from "./components/NavMenu";

export const DashboardLayout = () => {
  return (
    <>
      <Header />
      {/* mobile menu */}
      <NavMenu className=" md:hidden w-full justify-between grid grid-cols-3 place-items-center" />
      <div className="h-2 w-full bg-muted"></div>

      <div className="p-6">
        <Outlet />
      </div>
    </>
  );
};

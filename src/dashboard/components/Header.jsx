import UserSignInBtn from "../../components/UserSignInBtn";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  return (
    <header className="p-4 h-18 flex items-center justify-between w-full">
      <a href="/">
        <img src="/logo.svg" width={100} height={100} />
      </a>

      <NavMenu className="hidden md:flex gap-2" />

      <UserSignInBtn />
    </header>
  );
};

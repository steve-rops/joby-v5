import { Outlet } from "react-router";
import UserSignInBtn from "../components/UserSignInBtn";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const PagesLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <header className="p-4 h-18 flex items-center justify-between w-full">
        <a href="/">
          <img src="/logo.svg" width={100} height={100} />
        </a>

        <nav className="hidden md:flex">
          <ul className="flex gap-2 hover:cursor-pointer">
            <li className="hover:text-accent-foreground">Home</li>
            <li className="hover:text-accent-foreground">About</li>
            <li className="hover:text-accent-foreground">Services</li>
          </ul>
        </nav>

        <div className="hidden md:flex">
          <UserSignInBtn />
        </div>

        {/* mobile menu  */}
        <div className="md:hidden">
          {!isOpen ? (
            <Menu onClick={() => setIsOpen((open) => !open)} />
          ) : (
            <X onClick={() => setIsOpen((open) => !open)} />
          )}
        </div>
      </header>

      {isOpen && (
        <nav className="grid place-items-center ">
          <ul className="hover:cursor-pointer flex flex-col items-center">
            <li className="hover:text-accent-foreground">Home</li>
            <li className="hover:text-accent-foreground">About</li>
            <li className="hover:text-accent-foreground">Services</li>
          </ul>
        </nav>
      )}

      <Outlet />

      <footer className="px-6 lg:px-8 py-12 border-t border-border bg-accent/20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="text-2xl font-bold text-foreground">Joby</div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              &copy; 2025 Joby. All rights reserved. Made with ❤️ for job
              seekers everywhere.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

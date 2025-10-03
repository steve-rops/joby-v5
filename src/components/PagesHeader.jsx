import { Menu, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { Link } from "react-router";
import { BubbleDropdown } from "../pages/home/components/BubbleDropdown";

export const PagesHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMenuBarCTA, setShowMenuBarCTA] = useState(false);

  // Toggle scrolled state when passing threshold
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
      setShowMenuBarCTA(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <header className="z-50  p-4">
      <div className="relative">
        <div className="flex items-center  gap-2">
          {/* Menu Button */}
          <button onClick={handleClick} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo */}
          <a>
            <img src="/logo.svg" width={100} height={100} />
          </a>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              key="dropdown-nav"
              initial={{ opacity: 0, y: -20 }} // Start above and invisible
              animate={{ opacity: 1, y: 0 }} // Slide down to normal position
              exit={{ opacity: 0, y: -20 }} // Slide up and disappear on close
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden  absolute bg-white/90 backdrop-blur-lg shadow-lg rounded-md"
            >
              <ul className="flex flex-col gap-3 text-md font-medium  p-4 rounded-md ">
                <li>
                  <a href="#home" className="hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-500">
                    Contact
                  </a>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>

      {/* bubble-like menu  */}
      <AnimatePresence mode="wait">
        {scrolled && (
          <motion.div
            key="bubble"
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50
              bg-white/70 backdrop-blur-lg shadow-lg rounded-full
              px-6 py-3 flex items-center justify-between gap-6"
          >
            {/* LEFT SLOT (Logo) */}
            <motion.div
              layout
              className="flex items-center overflow-hidden"
              animate={{
                width: showMenuBarCTA ? 0 : "auto",
                marginRight: showMenuBarCTA ? 0 : 24,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait">
                {!showMenuBarCTA && (
                  <motion.a
                    key="logo"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex-shrink-0 relative  w-24"
                  >
                    <img src="/logo.svg" className="w-full" />
                  </motion.a>
                )}
              </AnimatePresence>
            </motion.div>

            {/* NAV (takes center, expands when logo/cta changes) */}
            {/* bg-screens menu */}
            <motion.nav layout className="hidden md:flex flex-1">
              <ul className="flex gap-6 text-md font-medium justify-center whitespace-nowrap">
                {showMenuBarCTA && (
                  <li>
                    <a
                      href="#home"
                      className="hover:text-blue-500 transition-colors"
                    >
                      Home
                    </a>
                  </li>
                )}

                <li>
                  <a
                    href="#about"
                    className="hover:text-blue-500 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-blue-500 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </motion.nav>

            {/* mobileMenu */}
            <motion.nav layout className="relative flex md:hidden flex-1">
              <BubbleDropdown />
            </motion.nav>

            {/* RIGHT SLOT (CTA) */}
            <motion.div
              layout
              className="flex items-center overflow-hidden"
              animate={{
                width: showMenuBarCTA ? "auto" : 0,
                marginLeft: showMenuBarCTA ? 24 : 0,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait">
                {showMenuBarCTA && (
                  <motion.div
                    key="cta"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="flex-shrink-0"
                  >
                    <Link to="/dashboard/search">
                      <Button>
                        <span>Discover</span> <Sun />
                      </Button>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

import { Outlet } from "react-router";

import { PagesHeader } from "@/components/PagesHeader";

export const PagesLayout = () => {
  return (
    <div className="min-h-screen w-full bg-[#fefcff] relative">
      {/* Dreamy Sky Pink Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(112, 51, 255, 0.2), transparent 60%)`,
        }}
      />

      <div className="relative">
        <PagesHeader />

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
    </div>
  );
};

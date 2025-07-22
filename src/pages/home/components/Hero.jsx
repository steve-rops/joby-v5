import { useUser } from "@clerk/clerk-react";
import { Button } from "../../../components/ui/button";

export const Hero = () => {
  const { isSignedIn } = useUser();
  return (
    <section className="px-4 space-y-12 h-[calc(100svh-4.5rem)] grid grid-rows-[20%_20%_1fr]">
      <div className="pt-16 flex flex-col justify-center items-center">
        <h1 className="text-5xl font-semibold text-foreground/75">
          Your Dream Job Called. It’s on{" "}
          <span className="text-primary">
            Joby<span className="text-accent">.</span>.
            <span className="text-accent-foreground">.</span>
          </span>
        </h1>
        <h2 className="text-muted-foreground/75 text-xl">
          Fun to browse. Easy to apply. Hard to believe it’s free.
        </h2>
      </div>

      <div className="w-full grid place-items-center">
        <a className="" href="/dashboard/search">
          <Button className="text-xl hover:cursor-pointer" size="lg">
            {isSignedIn ? "Continue browsing..." : "Let's start"}
          </Button>
        </a>
      </div>

      <div className="grid place-items-center items-start w-full h-full  overflow-hidden">
        <img src="/showcase.png" className=" h-80 " />
      </div>
    </section>
  );
};

import { useUser } from "@clerk/clerk-react";
import { Button } from "../../../components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, Circle, CircleCheck, CircleCheckBig } from "lucide-react";

export const Hero = () => {
  const { isSignedIn } = useUser();

  return (
    <section className="p-4 space-y-4 overflow-hidden">
      <div className="pt-8 flex gap-4 flex-col justify-center items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-2  border-primary border border-dashed rounded-full text-[11px]"
        >
          <span>🚀 </span>
          <span className="text-primary/60">Powered by Adzuna</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:w-1/2 w-full mx-auto text-center md:text-6xl font-semibold text-foreground/75"
        >
          Your Dream Job Called. It’s on{" "}
          <span className="text-primary">
            Joby<span className="text-accent">.</span>
            <span className="text-accent-foreground">.</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-muted-foreground/75 md:text-xl text-lg md:w-[calc(50%+50px)] w-full text-center mx-auto">
            Discover jobs near you in seconds with our interactive map. Explore
            with ease, apply in a tap—and yes, it’s completely free.
          </h2>
          <div className="flex  justify-center items-center gap-6 mt-2">
            <div className="flex justify-center items-center gap-2 mt-2 text-sm text-muted-foreground/75">
              <CircleCheckBig size={12} />
              <div>100% free</div>
            </div>
            <div className="flex justify-center items-center gap-2 mt-2 text-sm text-muted-foreground/75">
              <CircleCheckBig size={12} />
              <div>No credit card required</div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="w-full flex flex-col md:flex-row gap-2 justify-center py-8 mb-22"
        >
          <Link to="/dashboard/search">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="text-lg hover:cursor-pointer" size="lg">
                {isSignedIn ? (
                  "Continue browsing..."
                ) : (
                  <div className="flex justify-center items-center gap-2">
                    <span>Find Your Ideal Job!</span>
                    <ArrowRight />
                  </div>
                )}
              </Button>
            </motion.div>
          </Link>
          <Link to="#about">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                className="text-lg hover:cursor-pointer"
                size="lg"
              >
                <div className="flex justify-center items-center gap-2">
                  <span>Learn More</span>
                  <ArrowRight />
                </div>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.img
          src="/plagia.png"
          width={400}
          height={200}
          className="mx-auto rounded-lg"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200 }}
        />
      </motion.div>
    </section>
  );
};

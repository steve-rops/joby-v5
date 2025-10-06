import { useUser } from "@clerk/clerk-react";
import { Button } from "../../../components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { ArrowRight, Circle, CircleCheck, CircleCheckBig } from "lucide-react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";

export const Hero = () => {
  const { isSignedIn } = useUser();

  return (
    <section className="p-4 overflow-hidden">
      <div className="py-1 flex gap-4 flex-col justify-center items-center ">
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
          <div className="flex  justify-center items-center gap-6 ">
            <div className="flex justify-center items-center gap-2 my-1  text-sm text-muted-foreground/75">
              <CircleCheckBig size={12} />
              <div>100% free</div>
            </div>
            <div className="flex justify-center items-center gap-2 my-1 text-sm text-muted-foreground/75">
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
          className="w-full flex flex-col md:flex-row gap-2 items-center justify-center py-4"
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

        {/* crafted with */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col justify-center items-center gap-2 py-2 "
        >
          <div className="text-center text-sm text-muted-foreground/75 ">
            Crafted with state the of the art technologies
          </div>
          <div className="flex justify-center items-center gap-2 ">
            <div className="flex flex-col justify-center items-center hover:text-[#59C9F1] hover:scale-120 transition-all">
              <FaReact className="w-10 h-10 hover:text-[#59C9F1] text-[#59C9F1] lg:text-muted-foreground  " />
              <div className="text-xs ">React</div>
            </div>
            <div className="flex flex-col justify-center items-center hover:text-[#00BCFF] hover:scale-120 transition-all">
              <RiTailwindCssFill className="w-10 h-10 text-[#00BCFF] lg:text-muted-foreground transition-all hover:text-[#00BCFF]" />
              <div className="text-xs ">Tailwindcss</div>
            </div>
            <div className="flex flex-col  justify-center items-center hover:text-[#000000] hover:scale-120 transition-all">
              <SiShadcnui className="w-10 h-10  bg-black text-white p-1 rounded-xs" />
              <div className="text-xs ">ShadcnUI</div>
            </div>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="py-4"
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
      </div>
    </section>
  );
};

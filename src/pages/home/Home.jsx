import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

import {
  ArrowRight,
  Briefcase,
  CheckCircle,
  Clock,
  Globe,
  Search,
  Shield,
  Star,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Hero } from "./components/Hero";
import { WhatIsJoby } from "./components/WhatIsJoby";
import { WhyChooseUs } from "./components/WhyChooseUs";
import HowItWorks from "./components/HowItWorks";

export const Home = () => {
  return (
    <>
      <Hero />
      <WhatIsJoby />
      {/* <WhyChooseUs /> */}
      <HowItWorks />

      {/* CTA */}
      <section className="px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Ready to Find Your Dream Job?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've already found their perfect
            career match on Joby.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-full"
            >
              Start Job Search
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

import { Search, TrendingUp, Zap } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";

export const WhatIsJoby = () => {
  return (
    <section name="about" id="about" className="px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center space-y-4 ">
          <Badge
            variant="secondary"
            className="mb-4 text-accent-foreground bg-accent"
          >
            What is Joby?
          </Badge>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground ">
            The Modern Job Board That Actually Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Joby revolutionizes job searching by connecting talented
            professionals with their perfect opportunities through intelligent
            matching and seamless application processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="border-border bg-card hover:shadow-lg  col-span-2  grid place-items-cennter hover:scale-102 transition-all duration-300">
            <CardContent className="flex-col md:flex-row flex items-center gap-4">
              <img
                src="/illustrations/undraw_reading-time_gcvc.svg"
                className="w-40 h-40 "
              />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Easier than Ever
                </h3>
                <p className="text-muted-foreground">
                  Takes seconds to sign-in and find the best jop opportunities.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg  row-span-2 grid place-items-center col-span-2 lg:col-span-1 hover:scale-102 transition-all duration-300">
            <CardContent className=" md:flex-row lg:flex-col flex flex-col items-center gap-4">
              <img
                src="/illustrations/undraw_filter_v54h.svg"
                className="w-40 h-40 "
              />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Quick Filters
                </h3>
                <p className="text-muted-foreground">
                  Jobs that match your skills and preferences, not the other way
                  around.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg col-span-2  grid place-items-cennter hover:scale-102 transition-all duration-300">
            <CardContent className=" flex-col md:flex-row flex items-center gap-4">
              <img
                src="/illustrations/undraw_loving-it_hspq.svg"
                className="w-40 h-40 "
              />
              <div>
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Save For Later
                </h3>
                <p className="text-muted-foreground">
                  You are not sure yet? Save the job and come back later to
                  apply.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

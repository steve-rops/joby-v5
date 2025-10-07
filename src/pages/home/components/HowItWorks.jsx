import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Briefcase,
  Target,
  Globe,
  Clock,
  User,
  Filter,
  Menu,
  Check,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      duration: "30 secs",
      icon: <User />,
      title: "Create Your Profile",
      description:
        "Build a comprehensive profile showcasing your skills, experience, and career preferences in minutes.",
    },
    {
      number: 2,
      duration: "2 mins",
      icon: <Filter />,
      title: "Filter & Discover",
      description:
        "Our smart algorithm finds and recommends jobs that perfectly match your skills and preferences.",
    },
    {
      number: 3,
      duration: "2 mins",
      icon: <Check />,
      title: "Apply & Connect",
      description:
        "Apply with one click and connect directly with hiring managers. Track your progress in real-time.",
    },
  ];

  return (
    <>
      <section id="howItWorks" className="relative px-6 lg:px-8 py-20 ">
        <div className="text-center space-y-4 ">
          <Badge
            variant="secondary"
            className="mb-4 text-accent-foreground bg-accent"
          >
            How It Works
          </Badge>
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground ">
            Land Your Dream Job in 3 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process gets you from job search to job offer faster
            than ever before.
          </p>
        </div>

        {/* Steps */}
        <div className="w-full mx-auto mt-16 max-w-2xl  ">
          <div className="w-fit  mx-auto ">
            {steps.map((step, index) => (
              <div className="relative border-l border-primary pb-10">
                {/* number */}
                <div className="w-10 h-10 flex justify-center items-center absolute text-2xl font-semibold -left-5 bg-accent border top-2 rounded-full text-primary border-primary ">
                  {index + 1}
                </div>

                <Card className="ml-7  hover:shadow-lg transition-shadow">
                  <CardTitle className="flex flex-col md:flex-row items-center px-4 md:justify-between ">
                    <div className="flex items-center gap-2">
                      <span className="p-2 bg-primary/10 text-primary rounded-full">
                        {step.icon}
                      </span>
                      <span className=" font-semibold text-2xl">
                        {step.title}
                      </span>
                    </div>

                    {/* duration */}
                    <div className="flex self-start mt-2 md:mt-0 items-center gap-1 text-muted-foreground/80 p-2 bg-muted-foreground/10 rounded-full ">
                      <Clock />
                      <span className="text-sm ">{step.duration}</span>
                    </div>
                  </CardTitle>
                  <CardContent>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

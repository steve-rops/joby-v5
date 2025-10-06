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

export const Home = () => {
  return (
    <>
      <Hero />
      <WhatIsJoby />

      <section id="whyChooseUs" className="px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 text-accent-foreground bg-accent"
            >
              Why Choose Joby?
            </Badge>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Built for Job Seekers, Loved by Employers
            </h2>
            <p className="text-md text-muted-foreground max-w-3xl mx-auto">
              We've reimagined the job search experience from the ground up,
              making it faster, smarter, and completely free.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    100% Free Forever
                  </h3>
                  <p className="text-muted-foreground">
                    No hidden fees, no premium subscriptions. Access all
                    features completely free.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Privacy First
                  </h3>
                  <p className="text-muted-foreground">
                    Your data is secure and private. We never share your
                    information without permission.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Clock className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Save Time
                  </h3>
                  <p className="text-muted-foreground">
                    Spend less time searching and more time preparing for your
                    dream job.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Trusted by Thousands
                  </h3>
                  <p className="text-muted-foreground">
                    Join over 50,000 professionals who found their perfect job
                    through Joby.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  50,000+
                </div>
                <div className="text-muted-foreground mb-6">
                  Jobs Posted Monthly
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      95%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Success Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-foreground">
                      24h
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Avg Response
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "The best job board I've ever used. Found my dream job in just
                  2 weeks!"
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  - Sarah K., Software Engineer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 py-20 bg-accent/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 text-accent-foreground bg-accent"
            >
              How It Works
            </Badge>
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Land Your Dream Job in 3 Simple Steps
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our streamlined process gets you from job search to job offer
              faster than ever before.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  1
                </span>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Create Your Profile
              </h3>
              <p className="text-muted-foreground">
                Build a comprehensive profile showcasing your skills,
                experience, and career preferences in minutes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  2
                </span>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Get Matched
              </h3>
              <p className="text-muted-foreground">
                Our smart algorithm finds and recommends jobs that perfectly
                match your skills and preferences.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-foreground">
                  3
                </span>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Apply & Connect
              </h3>
              <p className="text-muted-foreground">
                Apply with one click and connect directly with hiring managers.
                Track your progress in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

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

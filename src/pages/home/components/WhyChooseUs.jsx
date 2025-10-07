import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Shield, Star, Users } from "lucide-react";

export const WhyChooseUs = () => {
  return (
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
                  No hidden fees, no premium subscriptions. Access all features
                  completely free.
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
                  <div className="text-2xl font-bold text-foreground">95%</div>
                  <div className="text-sm text-muted-foreground">
                    Success Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground">24h</div>
                  <div className="text-sm text-muted-foreground">
                    Avg Response
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">
                "The best job board I've ever used. Found my dream job in just 2
                weeks!"
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                - Sarah K., Software Engineer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Search, TrendingUp, Zap } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent } from "../../../components/ui/card";

export const WhatIsJoby = () => {
  return (
    <section name="about" id="about" className="px-6 lg:px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 text-accent-foreground bg-accent"
          >
            What is Joby?
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            The Modern Job Board That Actually Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Joby revolutionizes job searching by connecting talented
            professionals with their perfect opportunities through intelligent
            matching and seamless application processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Search className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Smart Job Discovery
              </h3>
              <p className="text-muted-foreground">
                Our AI-powered search helps you discover opportunities that
                match your skills, experience, and career goals.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                One-Click Applications
              </h3>
              <p className="text-muted-foreground">
                Apply to multiple jobs instantly with your saved profile. No
                more repetitive form filling.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                Real-Time Updates
              </h3>
              <p className="text-muted-foreground">
                Get instant notifications about application status, new job
                matches, and interview invitations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

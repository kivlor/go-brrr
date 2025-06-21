import { ArrowRight, Zap, Rocket, Clock } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/app/footer";
import { Header } from "@/components/app/header";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div>
      <Header />

      <main>
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              <Rocket className="w-3 h-3 mr-1" />
              Speed Running Success
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Build & Deploy at
              <span className="text-primary"> Lightning Speed</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Go Brrr accelerates your development workflow with cutting-edge
              tools and automation. Ship faster, scale better, and leave your
              competition in the dust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/sign-up">
                  Start Building Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4">
                Features
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need to Go Brrr
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Powerful features designed to supercharge your development
                process and help you ship products faster than ever.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Lightning Deploy</CardTitle>
                  <CardDescription>
                    Deploy your applications in seconds with our optimized CI/CD
                    pipeline and edge network.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Auto Scaling</CardTitle>
                  <CardDescription>
                    Automatically scale your infrastructure based on demand
                    without manual intervention.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Global CDN</CardTitle>
                  <CardDescription>
                    Serve your content from 200+ edge locations worldwide for
                    optimal performance.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Go Brrr?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of developers who are already building faster and
              shipping better products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/sign-up">
                  Start Building Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

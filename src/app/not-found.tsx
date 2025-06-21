import Link from "next/link";

import { Footer } from "@/components/app/footer";
import { Header } from "@/components/app/header";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />

      <main>
        <section className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
              Not Found
            </h1>

            <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
              Could not find requested resource
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/">Return to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

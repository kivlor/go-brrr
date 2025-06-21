import { Rocket } from "lucide-react";
import Link from "next/link";

import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Go Brrr</span>
          </div>
          <p className="text-muted-foreground">
            Speed running your development workflow with cutting-edge tools and
            automation.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
          <p>&copy; 2024 Go Brrr. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

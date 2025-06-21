"use client";

import { ArrowRight, Rocket } from "lucide-react";
import Link from "next/link";

import { User } from "@/components/app/user";
import { Button } from "@/components/ui/button";

import { client } from "@/lib/auth-client";

export function Header() {
  const { data: session, isPending } = client.useSession();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">Go Brrr</span>
        </Link>

        {!isPending && (
          <div className="flex items-center space-x-3">
            {session ? (
              <>
                <User />
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/sign-in">Sign In</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/sign-up">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { client } from "@/lib/auth-client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoaderCircle } from "lucide-react";
import Link from "next/link";

export function User() {
  const router = useRouter();
  const [signingOut, setSigningOut] = useState(false);

  const { data: session } = client.useSession();

  const handleSignOut = async () => {
    setSigningOut(true);
    await client.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/sign-in");
        },
        onError: () => {
          setSigningOut(false);
        },
      },
    });
  };

  if (signingOut) {
    return (
      <Avatar className="h-8 w-8">
        <AvatarFallback>
          <LoaderCircle className="size-4 animate-spin" />
        </AvatarFallback>
      </Avatar>
    );
  }

  return (
    session && (
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-8 w-8 rounded-full">
            <Avatar className="h-8 w-8">
              {session.user.image && (
                <AvatarImage src={session.user.image} alt={session.user.name} />
              )}
              <AvatarFallback>{session.user.name?.charAt(0)}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <p className="text-sm leading-none font-medium">
                {session.user.name}
              </p>
              <p className="text-muted-foreground text-xs leading-none">
                {session.user.email}
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/dashboard" className="w-full">
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/settings" className="w-full">
              Settings
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Button
              onClick={handleSignOut}
              className="w-full"
              disabled={signingOut}
              variant="ghost"
              size="sm"
            >
              Log out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}

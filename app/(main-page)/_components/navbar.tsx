import { BookUser, LockKeyhole, PlusSquare } from "lucide-react";
import Link from "next/link";

import { checkRole } from "@/utils/check-role";
import { cn } from "@/lib/utils";
import { getUserId } from "@/utils/get-user-id";
import Logo from "@/components/logo";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { source_sans_3 } from "@/app/fonts";

export default function Navbar() {
  const userId = getUserId();
  return (
    <header className="flex top-0 max-w-[1920px] h-20 px-4 justify-between bg-gradient-to-b from-navbarStart to-secondary">
      <Logo />
      <section className="flex md:space-x-4 space-x-3 w-auto items-center">
        <SignedOut>
          <Link
            className={cn("font-semibold text-xl", source_sans_3.className)}
            href={"/sign-in"}
          >
            Logga in
          </Link>
        </SignedOut>
        <SignedIn>
          {(checkRole("admin") || checkRole("moderator")) && (
            <Link href="/admin">
              <LockKeyhole strokeWidth={1} className="md:hidden block" />
              <p
                className={cn(
                  "text-xl font-medium md:block hidden",
                  source_sans_3.className
                )}
              >
                Admin Panel
              </p>
            </Link>
          )}
          <Link href="/create-post">
            <PlusSquare className="md:hidden block" />
            <p
              className={cn(
                "text-xl font-medium md:block hidden",
                source_sans_3.className
              )}
            >
              Skapa inlägg
            </p>
          </Link>
          <Link href={`/profile/${userId}`}>
            <BookUser strokeWidth={1} className="md:hidden block" />
            <p
              className={cn(
                "text-xl font-medium md:block hidden",
                source_sans_3.className
              )}
            >
              Min sida
            </p>
          </Link>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  height: 30,
                  width: 30,
                },
              },
            }}
          />
        </SignedIn>
      </section>
    </header>
  );
}

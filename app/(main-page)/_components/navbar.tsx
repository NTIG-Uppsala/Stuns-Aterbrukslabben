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
    <header className="flex top-0 h-20 bg-gradient-to-b from-navbarStart to-secondary">
      <div className="flex justify-between items-center w-full h-full max-w-[1920px] mx-auto px-4">
        <Logo />
        <section className="flex md:space-x-4 space-x-3 w-auto items-center h-full">
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
                <LockKeyhole
                  strokeWidth={1}
                  width={30}
                  height={30}
                  className="md:hidden block"
                />
                <p
                  className={cn(
                    "text-xl font-medium md:block hidden",
                    source_sans_3.className
                  )}
                >
                  Adminpanel
                </p>
              </Link>
            )}
            <Link href={`/profile/${userId}`}>
              <BookUser
                strokeWidth={1}
                width={30}
                height={30}
                className="md:hidden block"
              />
              <p
                className={cn(
                  "text-xl font-medium md:block hidden",
                  source_sans_3.className
                )}
              >
                Mina annonser
              </p>
            </Link>
            <Link href="/create-post">
              <PlusSquare
                strokeWidth={1}
                width={30}
                height={30}
                className="md:hidden block"
              />
              <p
                className={cn(
                  "md:block hidden text-xl text-white bg-sky-600 rounded-md px-4 py-[6px] font-medium",
                  source_sans_3.className
                )}
              >
                Skapa annons
              </p>
            </Link>
            <div className="md:block hidden bg-black bg-opacity-70 w-[1px] md:h-1/2 h-2/5" />
            <div className="md:block hidden">
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: {
                      height: 35,
                      width: 35,
                    },
                  },
                }}
              />
            </div>
            <div className="md:hidden block">
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
            </div>
          </SignedIn>
        </section>
      </div>
    </header>
  );
}

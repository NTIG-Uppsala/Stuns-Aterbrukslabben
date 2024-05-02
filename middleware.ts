import { NextResponse } from "next/server";

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/terms-of-service",
    "/faq",
    "/about",
    "/api/webhooks(.*)",
    "/api/send-mail-to-expiring-posts(.*)",
    "/delete(.*)",
    "/extend(.*)",
  ],

  afterAuth(auth, req) {
    if (!auth.userId && !auth.isPublicRoute) {
      const path = new URL(req.url).pathname;
      return NextResponse.redirect(
        new URL("/sign-in?redirect_url=" + path, req.url)
      );
    }
  },
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

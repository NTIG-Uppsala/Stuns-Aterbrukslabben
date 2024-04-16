import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <SignIn
      appearance={{
        layout: { termsPageUrl: "/terms-of-service" },
        elements: {
          footer: "flex flex-col text-center gap-y-2",
        },
      }}
    />
  );
}

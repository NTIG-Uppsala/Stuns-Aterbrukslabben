import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <SignUp
      appearance={{
        layout: { termsPageUrl: "/terms-of-service" },
        elements: {
          footer: "flex flex-col text-center gap-y-2",
        },
      }}
    />
  );
}

import Logo from "@/components/logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full md:mt-16 mt-12 bg-gradient-to-b from-secondary to-navbarStart">
      <div className="flex justify-around max-w-[1000px] py-10 mx-auto items-center w-full">
        <Logo />
        <Link
          href="/terms-of-service"
          className="md:text-base text-sm font-semibold hover:underline"
        >
          Användarvillkor
        </Link>
      </div>
    </footer>
  );
}

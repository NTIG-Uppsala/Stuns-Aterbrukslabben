import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full md:mt-16 mt-12 bg-gradient-to-b from-secondary to-navbarStart">
      <div className="flex w-full justify-around max-w-[1000px] md:text-base text-sm font-semibold py-10 mx-auto">
        <Link href="/faq" className="hover:underline">
          Vanliga frågor
        </Link>
        <Link href="/about" className="hover:underline">
          Om oss
        </Link>
        <Link href="/terms-of-service" className="hover:underline">
          Användarvillkor
        </Link>
      </div>
    </footer>
  );
}

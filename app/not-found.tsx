import Link from "next/link";

import Logo from "@/components/logo";

import Footer from "./(main-page)/_components/footer";
import Navbar from "./(main-page)/_components/navbar";

export default async function NotFound() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Navbar />
      <div className="flex flex-col text-center h-[72vh] items-center justify-center px-5">
        <Logo />
        <h1 className="font-semibold text-2xl pt-4 text-pretty">
          Ojdå... sidan kunde inte hittas
        </h1>
        <p className="max-w-screen-sm text-lg text-balance">
          Om felet är hos oss ber vi om ursäkt! Kolla gärna att adressen stämmer
          överens med dit du ville.
        </p>
        <Link className="text-blue-500 pt-1" href="/">
          Gå till startsidan
        </Link>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}

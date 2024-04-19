import Link from "next/link";
import { Plus } from "lucide-react";

export default function CreatePostLink() {
  return (
    <Link
      className="flex bg-primary rounded-md md:px-4 px-2 md:py-[10px] py-[6px] md:gap-x-2 gap-x-1 items-center"
      href="/create-post"
    >
      <Plus className="md:w-5 md:h-5 w-[15px] h-[15px]" />
      <p className="md:text-lg text-xs ">Skapa inlägg</p>
    </Link>
  );
}

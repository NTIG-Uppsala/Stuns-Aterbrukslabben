import Link from "next/link";
import { Plus } from "lucide-react";

export default function CreatePostLink() {
  return (
    <Link
      className="flex bg-primary rounded-md md:px-4 px-2 md:py-[10px] py-[6px] md:gap-x-2 gap-x-1 items-center"
      href="/create-post"
    >
      <Plus className="md:block hidden" width={20} height={20} />
      <Plus className="md:hidden block" width={15} height={15} />
      <p className="md:text-lg text-xs ">Skapa inlägg</p>
    </Link>
  );
}

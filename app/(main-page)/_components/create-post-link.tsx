import Link from "next/link";
import { Plus } from "lucide-react";

export default function CreatePostLink() {
  return (
    <Link
      className="flex text-white bg-sky-600 rounded-md md:px-4 px-2 md:py-2 py-[6px] md:gap-x-2 gap-x-1 items-center"
      href="/create-post"
    >
      <Plus className="md:w-6 md:h-6 w-4 h-4" />
      <p className="md:text-lg text-xs">Skapa annons</p>
    </Link>
  );
}

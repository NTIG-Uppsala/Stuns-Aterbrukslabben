"use client";

import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import handleSearchParamsChange from "@/utils/handle-search-params-change";
import type { PostCategory } from "@/types/globals";

export default function PostCategoryButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  function handlePostCategoryChange(postCategory: PostCategory) {
    handleSearchParamsChange(
      "category",
      postCategory,
      pathname,
      searchParams,
      replace
    );
  }

  return (
    <div className="flex gap-x-3 rounded-md">
      <div className="flex items-center bg-primary bg-opacity-40 rounded-md md:text-base text-[9px]">
        <button
          onClick={() => handlePostCategoryChange(undefined)}
          className={clsx(
            "bg-primary hover:bg-opacity-100 bg-opacity-0 rounded-s-md md:px-3 px-[6px] md:py-[8px] py-1",
            !searchParams.get("category") && "bg-opacity-100"
          )}
        >
          Alla
        </button>
        <div className="md:hidden w-[1px] h-5/6 bg-black bg-opacity-20"></div>
        <button
          onClick={() => handlePostCategoryChange("förbrukningsvara")}
          className={clsx(
            "bg-primary hover:bg-opacity-100 bg-opacity-0 md:px-3 px-[6px] md:py-[8px] py-1",
            searchParams.get("category") === "förbrukningsvara" &&
              "bg-opacity-100"
          )}
        >
          Förbrukningsvara
        </button>
        <div className="md:hidden w-[1px] h-5/6 bg-black bg-opacity-20"></div>
        <button
          onClick={() => handlePostCategoryChange("instrument/maskin")}
          className={clsx(
            "bg-primary hover:bg-opacity-100 bg-opacity-0 md:px-3 px-[6px] md:py-[8px] py-1",
            searchParams.get("category") === "instrument/maskin" &&
              "bg-opacity-100"
          )}
        >
          Instrument/Maskin
        </button>
        <div className="md:hidden w-[1px] h-5/6 bg-black bg-opacity-20"></div>
        <button
          onClick={() => handlePostCategoryChange("inventarie")}
          className={clsx(
            "bg-primary hover:bg-opacity-100 bg-opacity-0 rounded-e-md md:px-3 px-[6px] md:py-[8px] py-1",
            searchParams.get("category") === "inventarie" && "bg-opacity-100"
          )}
        >
          Inventarie
        </button>
      </div>
    </div>
  );
}

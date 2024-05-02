"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import handleSearchParamsChange from "@/utils/handle-search-params-change";

interface SearchBarProps {
  labelText: string;
  itemsFoundCount?: number;
}

export default function SearchBar({
  labelText,
  itemsFoundCount,
}: SearchBarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [showHint, setShowHint] = useState(false);
  const searchParamValue = searchParams.get("search");

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchInput = e.target.value;
    let query;
    // Clerk's "getUserList" function only accepts queries larger than two characters, hence
    // why the query is undefined up until the input has reached a length of atleast 3 characters.
    if (searchInput && searchInput.length < 3) {
      query = undefined;
      setShowHint(true);
    } else {
      query = searchInput;
      setShowHint(false);
    }
    handleSearchParamsChange("search", query, pathname, searchParams, replace);
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
      }}
      className="flex flex-col w-full"
    >
      <div className="flex items-end justify-between px-1 pb-1">
        <label htmlFor="search" className="md:text-lg text-sm font-medium">
          {labelText}
        </label>
        {searchParamValue
          ? searchParamValue.length > 2 && (
              <p className="md:text-base text-xs">
                {`${itemsFoundCount} resultat`}
              </p>
            )
          : showHint && <p className="md:text-base text-xs">Minst 3 tecken</p>}
      </div>
      <input
        id="search"
        className="rounded-md bg-primary md:h-12 h-9 md:px-3 px-2 md:text-lg text-sm"
        placeholder="Sök..."
        onChange={handleSearchChange}
        defaultValue={searchParamValue?.toString()}
        autoComplete="on"
      />
    </form>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { Post } from "@prisma/client";

import creationDateToString from "../utils/creation-date-to-string";
import getPostTypeSpecificData from "../utils/get-post-type-specific-data";

interface PostCardProps {
  postData: Post;
  timezone: string;
}

export default function PostCard({ postData, timezone }: PostCardProps) {
  const [creationDateString, setCreationDateString] = useState("laddar...");
  const [expirationDateString, setExpirationDateString] = useState("laddar...");
  const { postTypeColor, expirationDateText } = getPostTypeSpecificData({
    postType: postData.postType,
  });

  // UseEffect is used here to prevent hydration errors caused by differing times on server and client
  useEffect(() => {
    const dateCreationString = creationDateToString(
      postData.createdAt,
      timezone
    );
    setCreationDateString(dateCreationString);
    setExpirationDateString(postData.expiresAt.toLocaleDateString("sv-SE"));
  }, []);

  return (
    <Link href={`/post/${postData.id}`}>
      <div className="flex md:py-4 md:pr-4 py-2 pr-2 bg-secondary w-full rounded-xl">
        <div
          className={cn(
            "md:mr-2 md:min-w-2 min-w-1 mr-1 rounded-e-md",
            postTypeColor
          )}
        />
        <div className="grid grid-cols-12 w-full">
          <section className="col-span-4">
            <Image
              src={
                postData.category === "inventarie"
                  ? "/images/inventory.webp"
                  : postData.category === "förbrukningsvara"
                  ? "/images/consumables.webp"
                  : postData.category === "instrument/maskin"
                  ? "/images/instrument.webp"
                  : "/images/image-missing.webp"
              }
              alt="Annonsens bild"
              width={400}
              height={300}
              className="aspect-[4/3] w-full rounded-md"
            />
          </section>
          <section className="flex flex-col col-span-5 md:pl-4 pl-2">
            <div className="grow">
              <h3 className="md:text-2xl text-sm line-clamp-1 break-all">
                {postData.title}
              </h3>
              <p className="md:text-base text-[10px] md:line-clamp-3 line-clamp-2 mt-1 break-words">
                {postData.description}
              </p>
            </div>
            <div className="md:pt-0 pt-1">
              <div className="flex items-center gap-1">
                <div
                  className={cn(
                    "md:h-3 md:w-3 h-2 w-2 rounded-[50%]",
                    postTypeColor
                  )}
                ></div>
                <p className="md:text-sm text-[9px]">{postData.postType}</p>
              </div>
              <p className="md:text-sm text-[8px] capitalize line-clamp-1 break-all">
                {postData.location}
              </p>
            </div>
          </section>
          <section className="flex md:flex-col pl-2 flex-col-reverse col-span-3">
            <div className="flex md:flex-col flex-col-reverse md:grow">
              <p className="md:text-base text-[9px] text-end md:pb-2 pt-1">
                {creationDateString}
              </p>
              {postData.hasCustomExpirationDate && (
                <div className="md:text-base text-[9px] text-end text-red-500">
                  <p>{expirationDateText}</p>
                  <p>{expirationDateString}</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </Link>
  );
}

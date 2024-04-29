"use client";

import { Clock, MapPin, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { Post } from "@prisma/client";

import ContactMeDialog from "./contact-me-dialog";
import creationDateToString from "../../utils/creation-date-to-string";
import getPostTypeSpecificData from "../../utils/get-post-type-specific-data";

interface PostComponentProps {
  postData: Post;
  email: string;
  fullName: string;
  isPreview?: boolean;
  deleteButton?: JSX.Element;
}

export default function PostComponent({
  postData,
  email,
  fullName,
  isPreview,
  deleteButton,
}: PostComponentProps) {
  const [creationDateString, setCreationDateString] = useState("laddar...");
  const [expirationDateString, setExpirationDateString] = useState("laddar...");

  // UseEffect is used here to prevent hydration errors caused by differing times on server and client
  useEffect(() => {
    const dateCreationString = creationDateToString(
      postData.createdAt,
      timezone
    );
    setCreationDateString(dateCreationString);
    setExpirationDateString(postData.expiresAt.toLocaleDateString("sv-SE"));
  }, []);

  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const { postTypeColor, expirationDateText } = getPostTypeSpecificData({
    postType: postData.postType,
  });
  return (
    <article className="md:pt-10 pt-3 md:px-16 px-6 md:pb-6 pb-4 md:max-w-screen-md max-w-[360px] bg-secondary rounded-2xl mx-auto">
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
        alt="annonsens bild"
        width={600}
        height={450}
        className="aspect-[4/3] w-full rounded-md"
      />
      <div className="w-full flex flex-col gap-y-1">
        <div className="flex pt-2 md:text-base text-xs justify-between">
          <section className="flex gap-x-1 items-center capitalize">
            <MapPin className="md:block hidden shrink-0" size={16} />
            <MapPin className="md:hidden block shrink-0" size={12} />
            {postData.location}
          </section>
          <section className="flex text-end gap-x-1 text-nowrap items-center">
            <Clock className="md:block hidden" size={16} />
            <Clock className="md:hidden block" size={12} />
            {creationDateString}
          </section>
        </div>
        <div className="flex md:text-base text-xs md:h-14 h-10 justify-between">
          <section className="flex gap-x-1 h-1/2 items-center">
            <div
              className={cn(
                "md:h-4 md:w-4 h-3 w-3 rounded-[50%]",
                postTypeColor
              )}
            />
            {postData.postType}
          </section>
          {postData.hasCustomExpirationDate && (
            <section className="text-red-500 text-end">
              <p>{expirationDateText}</p>
              <p>{expirationDateString}</p>
            </section>
          )}
        </div>
        <h1 className="w-full md:text-3xl text-2xl break-words">
          {postData.title}
        </h1>
        <p className="w-full md:text-base text-xs md:pt-2 break-words">
          {postData.description}
        </p>
        <Link
          href={`/profile/${postData.userId}`}
          className={cn(
            "flex w-fit items-center mt-4 hover:opacity-70",
            isPreview ? "pointer-events-none" : ""
          )}
          aria-disabled={isPreview}
        >
          <User className="md:block hidden" size={18} />
          <User className="md:hidden block" size={12} />
          <p className="md:text-xl text-sm pl-1">{fullName}</p>
        </Link>
        <div className="flex justify-between items-center">
          <ContactMeDialog
            fullName={fullName}
            email={email}
            disabled={isPreview}
          />
        </div>
      </div>
      {deleteButton && (
        <div className="w-full flex justify-end">{deleteButton}</div>
      )}
    </article>
  );
}

import React from "react";

import { Button, Link, Section, Text } from "@react-email/components";

import EmailTemplate from "./components/email-template";

interface ExpiringPostsEmailsProps {
  postTitle: string;
  postId?: number;
  postLink?: string;
}

export function PostExpiredCustomMail({ postTitle }: ExpiringPostsEmailsProps) {
  return (
    <EmailTemplate
      preview={`Ditt inlägg "${postTitle}" har tagits bort`}
      header={`Ditt inlägg "${postTitle}" har blivit borttaget`}
      main={
        <>
          <Text>
            Din valda tidsperiod för ditt inlägg har nu gått ut. Eftersom inlägget inte
            förlängdes har det nu blivit borttaget.
          </Text>
        </>
      }
    />
  );
}

export function PostExpiredMail({ postTitle }: ExpiringPostsEmailsProps) {
  return (
    <EmailTemplate
      preview={`Ditt inlägg "${postTitle}" har tagits bort`}
      header={`Ditt inlägg "${postTitle}" har blivit borttaget`}
      main={
        <>
          <Text>
            Det har nu gått 6 månader sen du publicerade inlägget eller förnyade
            dess utgångsdatum. Eftersom inlägget inte förlängdes har det nu
            blivit borttaget.
          </Text>
        </>
      }
    />
  );
}

export function PostExpiresInAWeekCustomMail({
  postTitle,
  postLink,
  postId,
}: ExpiringPostsEmailsProps) {
  return (
    <EmailTemplate
      preview={`Ditt inlägg "${postTitle}" kommer tas bort om en vecka`}
      header={`Ditt inlägg "${postTitle}" tas snart bort`}
      main={
        <>
          <Text>
            Din valda tidsperiod för inlägget har snart gått ut. Du kan förlänga
            inlägget om det fortfarande är aktuellt eller så kan du ta bort
            inlägget. Om inget görs kommer inlägget att tas bort om en vecka.
          </Text>
          <Section className="mb-6">
            <Button
              className="p-3 mr-4 rounded-md bg-gray-500 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/extend/${postLink}`}
            >
              Förläng
            </Button>
            <Button
              className="p-3 rounded-md bg-gray-500 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/delete/${postLink}`}
            >
              Ta bort
            </Button>
          </Section>
          <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${postId}`}>
            Gå till inlägg
          </Link>
        </>
      }
    />
  );
}

export function PostExpiresInAWeekMail({
  postTitle,
  postLink,
  postId,
}: ExpiringPostsEmailsProps) {
  return (
    <EmailTemplate
      preview={`Ditt inlägg "${postTitle}" kommer tas bort om en vecka`}
      header={`Ditt inlägg "${postTitle}" tas snart bort`}
      main={
        <>
          <Text>
            Det har snart gått 6 månader sen du publicerade inlägget eller
            förnyade dess utgångsdatum. Du kan förlänga inlägget om det
            fortfarande är aktuellt eller så kan du ta bort inlägget. Om inget
            görs kommer inlägget att tas bort om en vecka.
          </Text>
          <Section className="mb-6">
            <Button
              className="p-3 mr-4 rounded-md bg-gray-500 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/extend/${postLink}`}
            >
              Förläng
            </Button>
            <Button
              className="p-3 rounded-md bg-gray-500 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/delete/${postLink}`}
            >
              Ta bort
            </Button>
          </Section>
          <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${postId}`}>
            Gå till inlägg
          </Link>
        </>
      }
    />
  );
}

export function PostExpiresTomorrowCustomMail({
  postTitle,
  postLink,
  postId,
}: ExpiringPostsEmailsProps) {
  return (
    <EmailTemplate
      preview={`Ditt inlägg "${postTitle}" kommer tas bort imorgon`}
      header={`Ditt inlägg "${postTitle}" tas bort imorgon`}
      main={
        <>
          <Text>
            Din valda tidsperiod för inlägget tar slut imorgon. Din valda
            tidsperiod för inlägget har snart gått ut. Du kan förlänga inlägget
            om det fortfarande är aktuellt eller så kan du ta bort inlägget. Om
            inget görs kommer inlägget att tas bort imorgon.
          </Text>
          <Section className="mb-6">
            <Button
              className="p-3 mr-4 rounded-md bg-gray-500 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/extend/${postLink}`}
            >
              Förläng
            </Button>
            <Button
              className="p-3 rounded-md bg-gray-500 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/delete/${postLink}`}
            >
              Ta bort
            </Button>
          </Section>
          <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${postId}`}>
            Gå till inlägg
          </Link>
        </>
      }
    />
  );
}

export function PostExpiresTomorrowMail({
  postTitle,
  postLink,
  postId,
}: ExpiringPostsEmailsProps) {
  return (
    <EmailTemplate
      preview={`Ditt inlägg "${postTitle}" kommer tas bort imorgon`}
      header={`Ditt inlägg "${postTitle}" tas bort imorgon`}
      main={
        <>
          <Text>
            Det har snart gått 6 månader sen du la upp ditt inlägg. Du kan
            förlänga inlägget om det fortfarande är aktuellt eller så kan du ta
            bort inlägget. Om inget görs kommer inlägget att tas bort imorgon.
            imorgon.
          </Text>
          <Section className="mb-6">
            <Button
              className="p-3 mr-4 rounded-md bg-gray-500 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/extend/${postLink}`}
            >
              Förläng
            </Button>
            <Button
              className="p-3 rounded-md bg-gray-500 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/delete/${postLink}`}
            >
              Ta bort
            </Button>
          </Section>
          <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${postId}`}>
            Gå till inlägg
          </Link>
        </>
      }
    />
  );
}

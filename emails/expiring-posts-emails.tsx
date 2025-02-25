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
      preview={`Din annons "${postTitle}" har tagits bort`}
      header={`Din annons "${postTitle}" har blivit borttaget`}
      main={
        <>
          <Text>
            Din valda tidsperiod för din annons har nu gått ut. Eftersom
            annonsen inte förlängdes har det nu blivit borttaget.
          </Text>
        </>
      }
    />
  );
}

export function PostExpiredMail({ postTitle }: ExpiringPostsEmailsProps) {
  return (
    <EmailTemplate
      preview={`Din annons "${postTitle}" har tagits bort`}
      header={`Din annons "${postTitle}" har blivit borttaget`}
      main={
        <>
          <Text>
            Det har nu gått 6 månader sen du publicerade annonsen eller förnyade
            dess utgångsdatum. Eftersom annonsen inte förlängdes har det nu
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
      preview={`Din annons "${postTitle}" kommer tas bort om en vecka`}
      header={`Din annons "${postTitle}" tas snart bort`}
      main={
        <>
          <Text>
            Din valda tidsperiod för annonsen har snart gått ut. Du kan förlänga
            annonsen om det fortfarande är aktuellt eller så kan du ta bort den.
            Om inget görs kommer annonsen att tas bort om en vecka.
          </Text>
          <Section className="mb-6">
            <Button
              className="p-3 mr-4 rounded-md bg-gray-300 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/extend/${postLink}`}
            >
              Förläng
            </Button>
            <Button
              className="p-3 rounded-md bg-gray-300 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/delete/${postLink}`}
            >
              Ta bort
            </Button>
          </Section>
          <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${postId}`}>
            Gå till annons
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
      preview={`Din annons "${postTitle}" kommer tas bort om en vecka`}
      header={`Din annons "${postTitle}" tas snart bort`}
      main={
        <>
          <Text>
            Det har snart gått 6 månader sen du publicerade annonsen eller
            förnyade dess utgångsdatum. Du kan förlänga annonsen om det
            fortfarande är aktuellt eller så kan du ta bort den. Om inget görs
            kommer annonsen att tas bort om en vecka.
          </Text>
          <Section className="mb-6">
            <Button
              className="p-3 mr-4 rounded-md bg-gray-300 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/extend/${postLink}`}
            >
              Förläng
            </Button>
            <Button
              className="p-3 rounded-md bg-gray-300 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/delete/${postLink}`}
            >
              Ta bort
            </Button>
          </Section>
          <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${postId}`}>
            Gå till annons
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
      preview={`Din annons "${postTitle}" kommer tas bort imorgon`}
      header={`Din annons "${postTitle}" tas bort imorgon`}
      main={
        <>
          <Text>
            Din valda tidsperiod för annonsen tar slut imorgon. Du kan förlänga
            annonsen om det fortfarande är aktuellt eller så kan du ta bort den.
            Om inget görs kommer annonsen att tas bort imorgon.
          </Text>
          <Section className="mb-6">
            <Button
              className="p-3 mr-4 rounded-md bg-gray-300 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/extend/${postLink}`}
            >
              Förläng
            </Button>
            <Button
              className="p-3 rounded-md bg-gray-300 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/delete/${postLink}`}
            >
              Ta bort
            </Button>
          </Section>
          <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${postId}`}>
            Gå till annonsen
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
      preview={`Din annons "${postTitle}" kommer tas bort imorgon`}
      header={`Din annons "${postTitle}" tas bort imorgon`}
      main={
        <>
          <Text>
            Det har snart gått 6 månader sen du publicerade annonsen eller
            förnyade dess utgångsdatum. Du kan förlänga annonsen om den
            fortfarande är aktuellt eller så kan du ta bort den. Om inget görs
            kommer annonsen att tas bort imorgon.
          </Text>
          <Section className="mb-6">
            <Button
              className="p-3 mr-4 rounded-md bg-gray-300 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/extend/${postLink}`}
            >
              Förläng
            </Button>
            <Button
              className="p-3 rounded-md bg-gray-300 text-black"
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/delete/${postLink}`}
            >
              Ta bort
            </Button>
          </Section>
          <Link href={`${process.env.NEXT_PUBLIC_SITE_URL}/post/${postId}`}>
            Gå till annons
          </Link>
        </>
      }
    />
  );
}

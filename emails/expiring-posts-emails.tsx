import React from "react";

import { Text, Link, Section, Button } from "@react-email/components";

import EmailTemplate from "./components/email-template";

interface ChangeRoleEmailProps {
  postTitle: string;
  postId?: number;
  postLink?: string;
}

export function PostExpiredCustomMail({ postTitle }: ChangeRoleEmailProps) {
  return (
    <EmailTemplate
      preview={`Ditt inlägg "${postTitle}" har tagits bort`}
      header={`Ditt inlägg "${postTitle}" har blivit bortaget`}
      main={
        <>
          <Text>
            Din valda tidsperiod har nu löpt ut. Och eftersom inlägget inte
            förlängdes har det nu blivit bortaget.
          </Text>
        </>
      }
    />
  );
}

export function PostExpiredMail({ postTitle }: ChangeRoleEmailProps) {
  return (
    <EmailTemplate
      preview={`Ditt inlägg "${postTitle}" har tagits bort`}
      header={`Ditt inlägg "${postTitle}" har blivit bortaget`}
      main={
        <>
          <Text>
            Det har nu gått 6 månader sen du la ut ditt inlägg. Eftersom
            inlägget inte förlängdes har det nu blivit bortaget.
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
}: ChangeRoleEmailProps) {
  return (
    <EmailTemplate
      preview={`Ditt inlägg "${postTitle}" kommer tas bort om en vecka`}
      header={`Ditt inlägg "${postTitle}" tas snart bort`}
      main={
        <>
          <Text>
            Din valda tidsperiod för inlägget har snart gått ut. Om inlägget
            fortfarande är aktuellt, kan du förlänga det genom att uppdatera
            det. Annars kommer det att tas bort om en vecka.
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
}: ChangeRoleEmailProps) {
  return (
    <EmailTemplate
      preview={`Ditt inlägg "${postTitle}" kommer tas bort om en vecka`}
      header={`Ditt inlägg "${postTitle}" tas snart bort`}
      main={
        <>
          <Text>
            Det har snart gått 6 månader sen du la upp ditt inlägg. Om inlägget
            fortfarande är aktuellt, kan du förlänga det genom att uppdatera
            det. Annars kommer det att tas bort om en vecka.
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
}: ChangeRoleEmailProps) {
  return (
    <EmailTemplate
      preview={`Ditt inlägg "${postTitle}" kommer tas bort imorgon`}
      header={`Ditt inlägg "${postTitle}" tas bort imorgon`}
      main={
        <>
          <Text>
            Din valda tidsperiod för inlägget tar slut imorgon. Om inlägget
            fortfarande är aktuellt, kan du förlänga det genom att uppdatera
            det. Annars kommer det att tas bort imorgon.
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
}: ChangeRoleEmailProps) {
  return (
    <EmailTemplate
      preview={`Ditt inlägg "${postTitle}" kommer tas bort imorgon`}
      header={`Ditt inlägg "${postTitle}" tas bort imorgon`}
      main={
        <>
          <Text>
            Det har snart gått 6 månader sen du la upp ditt inlägg. Om inlägget
            fortfarande är aktuellt, kan du förlänga det genom att uppdatera
            det. Annars kommer det att tas bort imorgon.
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

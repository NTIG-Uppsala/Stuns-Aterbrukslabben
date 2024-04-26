import React from "react";

import { Section, Text } from "@react-email/components";

import EmailTemplate from "./components/email-template";

interface DeletedPostEmailProps {
  comment?: string;
  title: string;
}

export default function DeletedPostEmail({
  comment,
  title,
}: DeletedPostEmailProps) {
  return (
    <EmailTemplate
      preview="Din annons har blivit borttaget"
      header={`Din annons "${title}" har blivit borttaget`}
      main={
        <>
          <Text>
            Detta kan bero på att annonsen var olämpligt för sidan och/eller
            brutit våra regler. Om du tror att det har skett ett fel och inte
            känner igen detta kan du höra av dig till oss.
          </Text>
          {comment && (
            <Section>
              <Text className="font-semibold">Kommentar från moderator</Text>
              <Text>{comment}</Text>
            </Section>
          )}
        </>
      }
    />
  );
}

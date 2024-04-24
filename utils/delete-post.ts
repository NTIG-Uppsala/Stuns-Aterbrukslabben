"use server";

import { checkRole } from "@/utils/check-role";
import { db } from "@/lib/db";
import DeletedPostEmail from "@/emails/deleted-post-email";
import type { Post } from "@prisma/client";

import getNameAndEmailFromUserId from "./get-name-and-email-from-user-id";
import sendMail from "./send-mail";

interface DeletePostProps {
  postData: Post;
  comment?: string;
}

export default async function deletePost({
  postData,
  comment,
}: DeletePostProps) {
  if (!checkRole("admin") && !checkRole("moderator")) {
    return { error: "Obehörig" };
  }
  const { email } = await getNameAndEmailFromUserId({
    userId: postData.userId,
  });

  try {
    sendMail({
      toMail: email,
      subject: "Ditt inlägg har blivit borttaget",
      mailTemplate: DeletedPostEmail({
        comment: comment,
        title: postData.title,
      }),
    });
  } catch {
    return { error: "Kunde inte skicka e-post" };
  }

  try {
    await db.archivedPosts.create({
      data: {
        title: postData.title,
        description: postData.description,
        postType: postData.postType,
        category: postData.category,
        location: postData.location,
        createdAt: postData.createdAt,
        hasCustomExpirationDate: postData.hasCustomExpirationDate,
        deletionReason: "Modererad",
      },
    });
  } catch (err) {
    return { error: "Kunde inte arkivera inlägg" };
  }

  try {
    await db.post.delete({
      where: {
        id: postData.id,
      },
    });
    return { data: "borttagen" };
  } catch (err) {
    return { error: "Kunde inte ta bort inlägg" };
  }
}

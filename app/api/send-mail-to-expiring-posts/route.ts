import { headers } from "next/headers";

import {
  PostExpiredCustomMail,
  PostExpiredMail,
  PostExpiresInAWeekCustomMail,
  PostExpiresInAWeekMail,
  PostExpiresTommorowCustomMail,
  PostExpiresTommorowMail,
} from "@/emails/expiring-posts-emails";

import getSoonExpiringPosts from "../_utils/get-soon-expiring-posts";
import { sendMailToExpiringPosts } from "../_utils/send-mail-to-expiring-posts";
import deletePostsByIds from "../../../utils/delete-posts-by-id";
import addAndGetFromSoonExpieringPosts from "../_utils/add-and-get-from-soon-expiering-posts";

export async function POST() {
  const mailAutomationSecret = process.env.MailAutomationSecret;
  const headersPayload = headers();
  const secret = headersPayload.get("secret");
  if (secret !== mailAutomationSecret) {
    return Response.json({
      message: "Unauthorized",
    });
  }

  const { postsExperingInOneWeek, postsExperingTommorow, postsExperingToday } =
    await getSoonExpiringPosts();

  postsExperingInOneWeek.forEach(async (post) => {
    const postLink = await addAndGetFromSoonExpieringPosts({ post });
    if (post.hasCustomExpirationDate) {
      sendMailToExpiringPosts({
        post,
        subject: "Ditt inlägg går ut om en vecka",
        mailTemplate: PostExpiresInAWeekCustomMail({
          postTitle: post.title,
          postLink,
          postId: post.id,
        }),
      });
    } else {
      sendMailToExpiringPosts({
        post,
        subject: "Ditt inlägg går ut om en vecka",
        mailTemplate: PostExpiresInAWeekMail({
          postTitle: post.title,
          postLink,
          postId: post.id,
        }),
      });
    }
  });

  postsExperingTommorow.forEach(async (post) => {
    const postLink = await addAndGetFromSoonExpieringPosts({ post });
    if (post.hasCustomExpirationDate) {
      sendMailToExpiringPosts({
        post,
        subject: "Ditt inlägg går ut imorgon",
        mailTemplate: PostExpiresTommorowCustomMail({
          postTitle: post.title,
          postLink,
          postId: post.id,
        }),
      });
    } else {
      sendMailToExpiringPosts({
        post,
        subject: "Ditt inlägg går ut imorgon",
        mailTemplate: PostExpiresTommorowMail({
          postTitle: post.title,
          postLink,
          postId: post.id,
        }),
      });
    }
  });

  const postsToDeleteIds: number[] = [];

  postsExperingToday.forEach((post) => {
    if (post.hasCustomExpirationDate) {
      sendMailToExpiringPosts({
        post,
        subject: "Ditt inlägg har tagits bort",
        mailTemplate: PostExpiredCustomMail({
          postTitle: post.title,
        }),
      });
    } else {
      sendMailToExpiringPosts({
        post,
        subject: "Ditt inlägg har tagits bort",
        mailTemplate: PostExpiredMail({
          postTitle: post.title,
        }),
      });
    }
    postsToDeleteIds.push(post.id);
  });

  await deletePostsByIds({ postsIds: postsToDeleteIds });

  return Response.json({
    message: "Mails sent and posts deleted",
  });
}

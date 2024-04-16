import { headers } from "next/headers";

import deletePostsByIds from "@/utils/delete-posts-by-ids";
import {
  PostExpiredCustomMail,
  PostExpiredMail,
  PostExpiresInAWeekCustomMail,
  PostExpiresInAWeekMail,
  PostExpiresTomorrowCustomMail,
  PostExpiresTomorrowMail,
} from "@/emails/expiring-posts-emails";

import addPostToExpiringPosts from "../_utils/add-post-to-expiring-posts";
import findSoonExpiringPosts from "../_utils/find-soon-expiring-posts";
import { sendMailToExpiringPosts } from "../_utils/send-mail-to-expiring-posts";

export async function POST() {
  const mailAutomationSecret = process.env.MAIL_AUTOMATION_SECRET;
  const headersPayload = headers();
  const secret = headersPayload.get("secret");
  if (secret !== mailAutomationSecret) {
    return Response.json({
      message: "Secret key doesn't match",
    });
  }

  const { postsExpiringInOneWeek, postsExpiringTomorrow, postsExpiringToday } =
    await findSoonExpiringPosts();

  postsExpiringInOneWeek.forEach(async (post) => {
    const postLink = await addPostToExpiringPosts({ post });
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

  postsExpiringTomorrow.forEach(async (post) => {
    const postLink = await addPostToExpiringPosts({ post });
    if (post.hasCustomExpirationDate) {
      sendMailToExpiringPosts({
        post,
        subject: "Ditt inlägg går ut imorgon",
        mailTemplate: PostExpiresTomorrowCustomMail({
          postTitle: post.title,
          postLink,
          postId: post.id,
        }),
      });
    } else {
      sendMailToExpiringPosts({
        post,
        subject: "Ditt inlägg går ut imorgon",
        mailTemplate: PostExpiresTomorrowMail({
          postTitle: post.title,
          postLink,
          postId: post.id,
        }),
      });
    }
  });

  const postsToDeleteIds: number[] = [];

  postsExpiringToday.forEach((post) => {
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

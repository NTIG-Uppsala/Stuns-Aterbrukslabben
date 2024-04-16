import getNameAndEmailFromUserId from "@/utils/get-name-and-email-from-user-id";
import { type Post } from "@prisma/client";
import sendMail from "@/utils/send-mail";

interface SendMailToExpiringPostsProps {
  post: Post;
  subject: string;
  mailTemplate: React.ReactNode;
}

export async function sendMailToExpiringPosts({
  post,
  subject,
  mailTemplate,
}: SendMailToExpiringPostsProps) {
  const { email } = await getNameAndEmailFromUserId({ userId: post.userId });

  sendMail({
    toMail: email,
    subject,
    mailTemplate,
  });
}

"use server";

import { db } from "@/lib/db";

interface GetSoonExpiringPostProps {
  postLink: string;
}

export default async function getSoonExpiringPost({
  postLink,
}: GetSoonExpiringPostProps) {
  const soonExpiringPost = await db.soonExpiringPosts.findFirst({
    where: {
      postLink,
    },
  });

  if (!soonExpiringPost) {
    return null;
  }

  const post = await db.post.findFirst({
    where: {
      id: soonExpiringPost.postId,
    },
  });

  if (!post) {
    return null;
  }

  return post;
}

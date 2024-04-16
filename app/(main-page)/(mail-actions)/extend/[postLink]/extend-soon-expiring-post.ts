"use server";

import { db } from "@/lib/db";

interface ExtendSoonExpiringPostProps {
  postId: number;
}

export default async function extendSoonExpiringPost({
  postId,
}: ExtendSoonExpiringPostProps) {
  const newExpirationDate = new Date(
    new Date().setMonth(new Date().getMonth() + 6)
  );
  try {
    await db.post.update({
      where: {
        id: postId,
      },
      data: {
        expiresAt: newExpirationDate,
      },
    });
    await db.soonExpiringPosts.deleteMany({
      where: {
        postId: postId,
      },
    });
    return { data: newExpirationDate.toLocaleDateString() };
  } catch (err) {
    return { error: "Failed to extend expiration date of post" };
  }
}

import { db } from "@/lib/db";

interface ExtendSoonExpiringPostProps {
  postId: number;
}

export default async function extendSoonExpireingPost({
  postId,
}: ExtendSoonExpiringPostProps) {
  const newDate = new Date(new Date().setMonth(new Date().getMonth() + 6));
  try {
    await db.post.update({
      where: {
        id: postId,
      },
      data: {
        expiresAt: newDate,
      },
    });
    await db.soonExpiringPosts.deleteMany({
      where: {
        postId: postId,
      },
    });
    return { data: newDate.toLocaleDateString() };
  } catch (err) {
    return { error: "Failed to extend post" };
  }
}

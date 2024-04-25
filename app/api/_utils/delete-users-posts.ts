"use server";

import archivePost from "@/utils/archive-post";
import { db } from "@/lib/db";

interface DeleteUsersPostsProps {
  deletedUsersId: string;
}

export default async function deleteUsersPosts({
  deletedUsersId,
}: DeleteUsersPostsProps) {
  const [posts] = await db.$transaction([
    db.post.findMany({
      where: {
        userId: deletedUsersId,
      },
    }),

    db.post.deleteMany({
      where: {
        userId: deletedUsersId,
      },
    }),
  ]);

  try {
    posts.forEach(async (post) => {
      await archivePost({
        postData: post,
        deletionReason: "Användare bortagen",
      });
    });
  } catch {
    return { error: "Failed to archive user's posts" };
  }
  return { error: "Failed to delete user's posts" };
}

"use server";

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
      await db.archivedPosts.create({
        data: {
          deletionReason: "Användare borttagen",
          archivedAt: new Date(),
          createdAt: post.createdAt,
          location: post.location,
          title: post.title,
          description: post.description,
          postType: post.postType,
          category: post.category,
          hasCustomExpirationDate: post.hasCustomExpirationDate,
        },
      });
    });
  } catch {
    return { error: "Failed to archive user's posts" };
  }
  return { error: "Failed to delete user's posts" };
}

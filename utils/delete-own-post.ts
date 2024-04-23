"use server";

import { db } from "@/lib/db";
import { Post } from "@prisma/client";

interface DeletePostProps {
  postData: Post;
  deletionReason: string;
}

export default async function deletePost({
  postData,
  deletionReason,
}: DeletePostProps) {
  try {
    if (deletionReason) {
      await db.archivedPosts.create({
        data: {
          title: postData.title,
          description: postData.description,
          postType: postData.postType,
          category: postData.category,
          location: postData.location,
          createdAt: postData.createdAt,
          hasCustomExpirationDate: postData.hasCustomExpirationDate,
          deletionReason: deletionReason,
        },
      });
    }
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
  } catch {
    return { error: "Kunde inte ta bort inlägg" };
  }
}

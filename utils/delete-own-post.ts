"use server";

import { db } from "@/lib/db";
import { Post } from "@prisma/client";

interface DeletePostProps {
  postData: Post;
  successfulPost: Boolean;
}

export default async function deletePost({
  postData,
  successfulPost,
}: DeletePostProps) {
  if (successfulPost)
    try {
      await db.archivedPost.create({
        data: {
          title: postData.title,
          description: postData.description,
          postType: postData.postType,
          category: postData.category,
          location: postData.location,
          createdAt: postData.createdAt,
          hasCustomExpirationDate: postData.hasCustomExpirationDate,
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
  } catch {
    return { error: "Kunde inte ta bort inlägg" };
  }
}

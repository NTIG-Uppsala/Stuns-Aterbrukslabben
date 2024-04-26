"use server";

import { db } from "@/lib/db";
import { Post } from "@prisma/client";

import archivePost from "./archive-post";

interface DeletePostProps {
  postData: Post;
  deletionReason: string;
}

export default async function deletePost({
  postData,
  deletionReason,
}: DeletePostProps) {
  try {
    await archivePost({ postData, deletionReason });
  } catch (err) {
    return { error: "Kunde inte arkivera annons" };
  }

  try {
    await db.post.delete({
      where: {
        id: postData.id,
      },
    });
    return { data: "borttagen" };
  } catch {
    return { error: "Kunde inte ta bort annons" };
  }
}

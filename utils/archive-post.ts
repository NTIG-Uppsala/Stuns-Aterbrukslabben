import { db } from "@/lib/db";
import type { Post } from "@prisma/client";

interface ArchivePostProps {
  postData: Post;
  deletionReason: string;
}

export default async function archivePost({
  postData,
  deletionReason,
}: ArchivePostProps) {
  try {
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
  } catch (err) {
    return { error: "Could not archive post" };
  }
}

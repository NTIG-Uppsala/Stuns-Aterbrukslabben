import { db } from "@/lib/db";

import archivePost from "./archive-post";

interface DeletePostsByIdProps {
  postsIds: number[];
  deletionReason: string;
}

export default async function deletePostsByIds({
  postsIds,
  deletionReason,
}: DeletePostsByIdProps) {
  const [posts] = await db.$transaction([
    db.post.findMany({
      where: {
        id: {
          in: postsIds,
        },
      },
    }),

    db.post.deleteMany({
      where: {
        id: {
          in: postsIds,
        },
      },
    }),
  ]);

  try {
    posts.forEach(async (post) => {
      await archivePost({ postData: post, deletionReason });
    });
  } catch {
    return { error: "Failed to archive user's posts" };
  }
}

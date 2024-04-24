import { db } from "@/lib/db";

interface DeletePostsByIdProps {
  postsIds: number[];
}

export default async function deletePostsByIds({
  postsIds,
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
      await db.archivedPosts.create({
        data: {
          deletionReason: "Utgånget inlägg",
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
}

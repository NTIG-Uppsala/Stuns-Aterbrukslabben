import { db } from "@/lib/db";

interface DeletePostsByIdProps {
  postsIds: number[];
}

export default async function deletePostsByIds({
  postsIds,
}: DeletePostsByIdProps) {
  try {
    await db.post.deleteMany({
      where: {
        id: {
          in: postsIds,
        },
      },
    });
    return { data: "Removed posts" };
  } catch (err) {
    return { error: "Failed to remove posts" };
  }
}

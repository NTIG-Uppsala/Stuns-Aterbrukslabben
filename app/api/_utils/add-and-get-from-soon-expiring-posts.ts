import { db } from "@/lib/db";
import makeRandomId from "@/utils/make-random-id";
import { Post } from "@prisma/client";

interface AddAndGetFromSoonExpiringPostsProps {
  post: Post;
}

export default async function addAndGetFromSoonExpiringPosts({
  post,
}: AddAndGetFromSoonExpiringPostsProps) {
  const alreadyExists = await db.soonExpiringPosts.findFirst({
    where: {
      postId: post.id,
    },
  });

  if (alreadyExists) {
    return alreadyExists.postLink;
  }

  const postLinkId = makeRandomId({ length: 20 });
  await db.soonExpiringPosts.create({
    data: {
      postId: post.id,
      postLink: postLinkId,
    },
  });
  return postLinkId;
}

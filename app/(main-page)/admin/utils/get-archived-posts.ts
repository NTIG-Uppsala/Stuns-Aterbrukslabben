"use server";

import type { ArchivedPosts } from "@prisma/client";
import { db } from "@/lib/db";

export default async function getArchivedPosts() {
  let posts: ArchivedPosts[];
  try {
    posts = await db.archivedPosts.findMany();
  } catch {
    return { error: "Något gick fel" };
  }

  if (!posts) {
    return { error: "Inga arkiverade annonser hittades" };
  } else {
    return posts;
  }
}

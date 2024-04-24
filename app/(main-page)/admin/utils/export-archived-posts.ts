"use server";

import type { ArchivedPosts } from "@prisma/client";
import { db } from "@/lib/db";

export default async function ExportArchivedPosts() {
  let posts: ArchivedPosts[];
  try {
    posts = await db.archivedPosts.findMany();
  } catch {
    return { error: "Något gick fel" };
  }

  if (!posts) {
    return { error: "Inga arkiverade inlägg hittades" };
  } else {
    return posts;
  }
}

"use server";

import { db } from "@/lib/db";

interface CreatePostProps {
  data: any;
}

export default async function createPost({ data }: CreatePostProps) {
  try {
    await db.post.create({
      data: {
        userId: data.userId,
        title: data.title,
        description: data.description,
        postType: data.postTypePicker,
        category: data.categoryPicker,
        location: data.municipalityPicker,
        expiresAt: data.datePicker,
        hasCustomExpirationDate: data.datePicker !== undefined,
      },
    });
    return { data: "Inlägg " + data.title + " skapat" };
  } catch {
    return { error: "Kunde inte skapa inlägget" };
  }
}

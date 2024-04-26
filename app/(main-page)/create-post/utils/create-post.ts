"use server";

import { db } from "@/lib/db";
import { getUserId } from "@/utils/get-user-id";

interface CreatePostProps {
  data: any;
}

export default async function createPost({ data }: CreatePostProps) {
  const userId = getUserId();

  if (!userId) {
    return { error: "Kunde inte hämta användarinformation" };
  }

  try {
    await db.post.create({
      data: {
        userId: userId,
        title: data.title,
        description: data.description,
        postType: data.postTypePicker,
        category: data.categoryPicker,
        location: data.municipalityPicker,
        expiresAt:
          data.datePicker !== undefined ? new Date(data.datePicker) : undefined,
        hasCustomExpirationDate: data.datePicker !== undefined,
      },
    });
    return { data: "Inlägg " + data.title + " skapat" };
  } catch {
    return { error: "Kunde inte skapa inlägget" };
  }
}

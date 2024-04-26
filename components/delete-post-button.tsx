"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import deletePost from "@/utils/delete-post";
import type { Post } from "@prisma/client";

interface DeletePostButtonProps {
  postData: Post;
  redirectPath?: string;
}

export default function DeletePostButton({
  postData,
  redirectPath,
}: DeletePostButtonProps) {
  const router = useRouter();
  const [comment, setComment] = useState("");

  const onDelete = async () => {
    const result = await deletePost({ postData, comment });
    setComment("");
    if (result && result.error) {
      toast.error(result.error);
    } else if (result && result.data) {
      redirectPath && router.push(redirectPath);
      router.refresh();
      toast.success(postData.title + " " + result.data);
    } else {
      toast.error("Något gick fel");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="text-destructive font-semibold hover:opacity-80">
        Ta bort annons
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Är du säker?</AlertDialogTitle>
          <AlertDialogDescription>
            Detta kommer
            <span className="font-bold"> permanent</span> ta bort annonsen.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <input
            className="rounded-md p-2 w-full hidden sm:block"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
            placeholder="Kommentar (frivilligt)"
          />
          <AlertDialogCancel>Avbryt</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={onDelete}>
            Ta bort
          </AlertDialogAction>
          <input
            className="rounded-md p-2 w-full block sm:hidden mb-2"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            onSubmit={(e) => e.preventDefault()}
            placeholder="Kommentar (frivilligt)"
          />
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

"use client";
import type { Post } from "@prisma/client";

import PostComponent from "../../post/_components/post-component";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PostDialogProps {
  postData: Post;
  email: string;
  fullName: string;
}

export default function PostDialog({
  postData,
  email,
  fullName,
}: PostDialogProps) {
  return (
    <Dialog>
      <DialogTrigger className="md:hidden block whitespace-nowrap bg-primary py-1 md:px-4 px-3 rounded-sm md:text-base text-sm">
        Se inlägg
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Förhandsvisning</DialogTitle>
          <DialogDescription className="text-black text-start">
            <PostComponent
              post={postData}
              email={email}
              fullName={fullName}
              isPreview={true}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

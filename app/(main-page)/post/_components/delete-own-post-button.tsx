"use client";

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm, SubmitHandler } from "react-hook-form";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import deleteOwnPost from "@/utils/delete-own-post";
import { Post } from "@prisma/client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import FormLabel from "../../create-post/_components/form-label";
import FormErrorParagraph from "../../create-post/_components/form-error-paragraph";
import { Button } from "@/components/ui/button";

interface DeleteOwnPostButtonProps {
  postData: Post;
  redirectPath?: string;
}

type Inputs = {
  reason: string;
};

export default function DeleteOwnPostButton({
  postData,
  redirectPath,
}: DeleteOwnPostButtonProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();
  const [reason, setReason] = useState("");

  const onDelete = async () => {
    const result = await deleteOwnPost({
      postData,
      reason,
    });
    setReason("");
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
        Ta bort inlägg
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Är du säker?</AlertDialogTitle>
          <AlertDialogDescription>
            Detta kommer
            <span className="font-bold"> permanent</span> ta bort inlägget.
            <br />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <form onSubmit={handleSubmit(onDelete)}>
          <span className="text-base font-semibold">
            Varför vill du ta bort inlägget?
          </span>
          <RadioGroup
            className="flex items-center"
            value={reason}
            onValueChange={(value) => setReason(value)}
            {...register("reason", { required: "Välj ett alternativ" })}
          >
            <FormLabel content="Avslutad" />
            <RadioGroupItem value="Avslutad" />
            <FormLabel content="Annat" />
            <RadioGroupItem value="Annat" />
          </RadioGroup>
          {errors.reason?.message && (
            <FormErrorParagraph content={errors.reason.message} />
          )}
          <AlertDialogFooter>
            <AlertDialogCancel>Avbryt</AlertDialogCancel>
            <Button variant="destructive" type="submit">
              Ta bort
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

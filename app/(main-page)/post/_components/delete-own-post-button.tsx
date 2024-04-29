"use client";

import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

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
import { Button } from "@/components/ui/button";
import deleteOwnPost from "@/utils/delete-own-post";
import type { Post } from "@prisma/client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import FormErrorParagraph from "../../create-post/_components/form-error-paragraph";

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
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const router = useRouter();

  const onDelete = async (data: Inputs) => {
    const result = await deleteOwnPost({
      postData,
      deletionReason: data.reason,
    });
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
      <AlertDialogTrigger className="text-destructive font-semibold md:text-base text-sm hover:opacity-80">
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
        <form onSubmit={handleSubmit(onDelete)}>
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-base font-semibold">
              Resulterade annonsen i en donation?
            </h2>
            <Controller
              name="reason"
              control={control}
              rules={{ required: "Välj ett alternativ" }}
              render={({ field: { onChange, value } }) => (
                <RadioGroup
                  className="flex items-center"
                  value={value}
                  onValueChange={(value) => onChange(value)}
                >
                  <h3>Ja</h3>
                  <RadioGroupItem value="Lyckad" />
                  <h3>Nej</h3>
                  <RadioGroupItem value="Olyckad" />
                </RadioGroup>
              )}
            />
            {errors.reason?.message && (
              <FormErrorParagraph content={errors.reason.message} />
            )}
          </div>
          <AlertDialogFooter className="pt-8">
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

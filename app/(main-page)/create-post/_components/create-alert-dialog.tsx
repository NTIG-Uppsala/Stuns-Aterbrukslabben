"use client";

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

interface CreateAlertDialogProps {
  isSubmitting?: boolean;
}

export default function CreateAlertDialog({
  isSubmitting,
}: CreateAlertDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary py-1 md:px-4 px-3 md:text-base text-sm rounded-sm">
        Skapa
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Skapa inlägg?</AlertDialogTitle>
          <AlertDialogDescription>
            <p className="md:text-sm text-xs text-center text-balance">
              Säkerställ att utrustningen är i gott skick och fungerar korrekt.
              Defekt utrustning kan utgöra en säkerhetsrisk för användaren.
            </p>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Fortsätt redigera</AlertDialogCancel>
          <AlertDialogAction
            disabled={isSubmitting}
            form="create-post-form"
            type="submit"
          >
            Skapa
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

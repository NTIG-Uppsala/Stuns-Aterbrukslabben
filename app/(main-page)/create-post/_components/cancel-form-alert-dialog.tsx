"use client";

import { useRouter } from "next/navigation";

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

export default function CancelFormAlertDialog() {
  const router = useRouter();
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-destructive text-white py-1 md:px-4 px-3 md:text-base text-sm rounded-sm">
        Avbryt
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Är du säker på att du vill avbryta?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Om du avbryter nu kommer du att förlora alla ändringar.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Fortsätt redigera</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              router.push("/");
            }}
            className="bg-destructive text-white"
          >
            Avbryt
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

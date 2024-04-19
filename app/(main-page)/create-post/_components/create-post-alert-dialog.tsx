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

interface CreatePostAlertDialogProps {
  isSubmitting?: boolean;
}

export default function CreatePostAlertDialog({
  isSubmitting,
}: CreatePostAlertDialogProps) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary py-1 md:px-4 px-3 md:text-base text-sm rounded-sm">
        Skapa
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Skapa inlägg?</AlertDialogTitle>
          <AlertDialogDescription>
            <h1 className="md:text-base text-sm text-center text-pretty">
              När du skänker eller tar emot begagnad utrustning, tänk på
              följande
            </h1>
            <div className="flex flex-col gap-y-2 list-disc md:text-sm text-xs md:px-5 text-center text-pretty items-center">
              <hr />
              <p>
                Säkerställ så att utrustningen är i gott skick och fungerar
                korrekt. Defekt utrustning kan utgöra en säkerhetsrisk för
                användaren.
              </p>
              <hr className="w-4/5" />
              <p>
                Viss utrustning kan behöva regelbundet underhåll för att
                fortsätta fungera korrekt och säkert. Regelbundna kalibreringar
                kan vara nödvändiga.
              </p>
              <hr className="w-4/5" />
              <p>
                Säkerställ så att utrustning och material rengjorts från
                hälsovådliga ämnen, kemikalier och biologiskt material som
                utrustningen tidigare varit i kontakt med. Tänk särskilt på att
                utrustning som använts i forskning kan ha kontaminerats med
                ämnen vars hälsorisker ännu inte är kända.
              </p>
              <hr className="w-4/5" />
              <p>
                Vid nyttjande av begagnad utrustning är det användaren som bär
                ansvar för den egna säkerheten. Återbrukslabbet förmedlar endast
                kontakt mellan den som skänker, respektive tar emot utrustning
                och bär därför inget ansvar för utrustningens skick eller
                säkerhet.
              </p>
            </div>
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

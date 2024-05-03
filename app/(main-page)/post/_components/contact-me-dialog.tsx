"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ContactMeDialogProps {
  fullName: string;
  email: string;
  disabled?: boolean;
}

export default function ContactMeDialog({
  fullName,
  email,
  disabled,
}: ContactMeDialogProps) {
  return (
    <Dialog>
      <DialogTrigger disabled={disabled}>
        <div className="flex md:h-10 md:w-40 h-8 w-32 md:text-xl text-base rounded-lg bg-primary justify-center items-center">
          Kontakta mig
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <h1 className="md:text-lg text-sm text-center text-pretty">
            När du skänker eller tar emot begagnad utrustning, tänk på följande
          </h1>
          <div className="flex flex-col gap-y-2 list-disc md:text-sm text-xs md:px-5 text-center text-balance items-center">
            <hr />
            <p>
              Säkerställ så att utrustningen är i gott skick och fungerar
              korrekt. Defekt utrustning kan utgöra en säkerhetsrisk för
              användaren.
            </p>
            <hr className="w-4/5" />
            <p>
              Viss utrustning kan behöva regelbundet underhåll för att fortsätta
              fungera korrekt och säkert. Regelbundna kalibreringar kan vara
              nödvändiga.
            </p>
            <hr className="w-4/5" />
            <p>
              Säkerställ så att utrustning och material rengjorts från
              hälsovådliga ämnen, kemikalier och biologiskt material som
              utrustningen tidigare varit i kontakt med. Tänk särskilt på att
              utrustning som använts i forskning kan ha kontaminerats med ämnen
              vars hälsorisker ännu inte är kända.
            </p>
            <hr className="w-4/5" />
            <p>
              Vid nyttjande av begagnad utrustning är det användaren som bär
              ansvar för den egna säkerheten. Återbrukslabbet förmedlar endast
              kontakt mellan den som skänker, respektive tar emot utrustning och
              bär därför inget ansvar för utrustningens skick eller säkerhet.
            </p>
          </div>
          <p className="text-center text-lg md:pt-6 pt-2 break-all line-clamp-1">
            {fullName}
          </p>
          <a
            className="w-fit mx-auto text-center hover:underline text-blue-600 break-all line-clamp-2"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

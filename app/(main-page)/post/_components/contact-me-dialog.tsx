"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ContactMeDialogProps {
  name: string;
  email: string;
}

export default function ContactMeDialog({ name, email }: ContactMeDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex md:h-10 md:w-40 h-8 w-32 md:text-xl text-base rounded-lg bg-primary justify-center items-center">
          Kontakta mig
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <p className="md:text-base text-sm text-start">
            När du skänker eller tar emot begagnad utrustning, vänligen tänk på
            följande:
          </p>
          <ul className="flex flex-col gap-y-1 list-disc md:text-sm text-xs md:px-5 text-start">
            <li>
              Säkerställ så att utrustningen är i gott skick och fungerar
              korrekt. Defekt utrustning kan utgöra en säkerhetsrisk för
              användaren.
            </li>
            <li>
              Viss utrustning kan behöva regelbundet underhåll för att fortsätta
              fungera korrekt och säkert. Regelbundna kalibreringar kan vara
              nödvändiga.
            </li>
            <li>
              Säkerställ så att utrustning och material rengjorts från
              hälsovådliga ämnen, kemikalier och biologiskt material som
              utrustningen tidigare varit i kontakt med. Tänk särskilt på att
              utrustning som använts i forskning kan ha kontaminerats med ämnen
              vars hälsorisker ännu inte är kända.
            </li>
            <li>
              Säkerställ så att utrustning och material rengjorts från
              hälsovådliga ämnen, kemikalier och biologiskt material som
              utrustningen tidigare varit i kontakt med. Tänk särskilt på att
              utrustning som använts i forskning kan ha kontaminerats med ämnen
              vars hälsorisker ännu inte är kända.
            </li>
          </ul>
          <p className="flex justify-center text-lg md:pt-6 pt-2">{name}</p>
          <a
            className="flex justify-center hover:underline text-blue-600"
            href={`mailto:${email}`}
          >
            {email}
          </a>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

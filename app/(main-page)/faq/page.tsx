import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="flex flex-col w-[85ch] max-w-full mx-auto px-6 py-8 md:mt-16 mt-12 md:rounded-md bg-secondary">
      <h1 className="md:text-2xl text-lg font-semibold mb-4">
        Vanliga frågor och svar
      </h1>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-start">
            Vad är Återbrukslabbet?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Återbrukslabbet är en webbplats där du kan lägga upp annonser för
            att skänka bort eller efterfråga begagnad labbutrustning. Syftet är
            att användare ska kunna donera och efterfråga labbutrustning för
            användning i undervisning. På så vis ökar undervisningens relevans,
            avlastar skolbudgetar, sparar planetens resurser och gör lärandet
            roligare.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-start">
            Vad innebär kategorierna:
          </AccordionTrigger>
          <AccordionContent className="text-base">
            För att göra det lättare att leta bland annonser är dessa indelade i
            tre kategorier; ”förbrukningsvara”, ”instrument/maskin”, samt
            ”inventarie”
            <br /> <br />
            Förbrukningsvara – Sådant som förbrukas och regelbundet behöver
            ersättas, till exempel filterpapper, engångshandskar, pH-stickor,
            reagenser och kemikalier.
            <br /> <br />
            Instrument/maskiner – Avancerade utrustning används för att utföra
            mätningar eller olika processer, till exempel mikroskop,
            PCR-utrustning, pumpar, spektrometrar och voltmetrar.
            <br /> <br />
            Inventarie – Enklare utrustning som används på labb, till exempel
            glasvaror, skyddsglasögon, labbrockar och verktyg.
            <br /> <br />
            Välj den kategori du anser att din produkt bäst överensstämmer med
            när du skapar en annons.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-start">
            Får jag ta betalt för det jag erbjuder?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Nej, Återbrukslabbet får bara användas för att skänka labbutrustning
            och får inte användas som en marknadsplats.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-start">
            Hur fungerar slutdatum för en annons?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Om ett slutdatum anges när annonsen skapas kommer annonsen tas bort
            automatiskt det valda datumet. När slutdatumet närmar sig mejlas en
            påminnelse till annonsens skapare med möjlighet att förlänga
            slutdatumet. Om inget slutdatum väljs sätts detta automatiskt till 6
            månader från det datum då annonsen skapas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-start">
            Varför syns slutdatum bara på vissa annonser?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Om en användare sätter ett specifikt slutdatum på sin annons kommer
            det datumet att visas i annonsen. Om inget slutdatum är satt kommer
            inget sådant visas.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-start">
            En av mina annonser verkar vara borttagen?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            När en annons når sitt slutdatum plockas den bort automatiskt om
            datumet inte förlängs. Annonser kan även raderas om de bryter mot
            användarvillkoren. I samband med att annonser raderas sänds ett mejl
            som informerar om detta, samt om orsaken.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-start">
            När jag tar bort min annons blir jag frågad om annonsen resulterade
            i en donation?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Genom att analysera vilken typ av annonser som leder till att
            utrustning och förbrukningsvaror får en ny ägare, samt i vilken
            kommun detta sker, kan nya och bättre funktioner på Återbrukslabbet
            utvecklas.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

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
            Återbrukslabbet är en webbplats där du kan lägga upp inlägg för att
            skänka bort eller efterfråga begagnad labbutrustning. Syftet är att
            användare ska kunna donera och efterfråga labbutrustning för
            användning i ett pedagogiskt syfte. Detta istället för att
            utrustningen till exempel slängs i onödan.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-start">
            Vad innebär kategorierna: <br /> förbrukningsvara, instrument/maskin
            och inventarie?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            En förbrukningsvara är menad att användas under en begränsad tid och
            behöver ersättas eller förnyas regelbundet. Förbrukningsvaror kan
            inkludera saker som kemikalier, filter eller handskar. <br /> <br />
            Instrument/maskiner är verktyg som används inom laboratium för att
            mäta värden eller utföra olika processer. Instrument/maskiner kan
            inkludera mikroskop, PCR-maskiner, spektrometrar och voltmetrar.
            <br /> <br /> Inventarie är hjälpmedel som används i labbmiljöer för
            att underlätta i experiment. Inventarie kan inkludera kolvar, vågar,
            resistorer och provrör. <br /> <br /> Välj den kategori du anser att
            din produkt bäst överensstämmer med när du skapar ett inlägg.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-start">
            Får jag ta betalt för det jag erbjuder?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Nej, pengar får inte utbytas när produkter byter händer.
            Återbrukslabbet får bara användas för att skänka bort labbutrustning
            och ska inte användas som en marknadsplats. I vissa situationer kan
            pengar utbytas mot frakt av utrustningen men då sker detta utbyte
            utanför Återbrukslabbet och vi tar inte ansvar.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-start">
            Hur fungerar slutdatum för ett inlägg?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Om du sätter ett slutdatum på ditt inlägg kommer inlägget bli
            borttaget på ditt valda datum. När ditt slutdatum närmar sig kommer
            du få påminnelser på din mejl. Om du väljer att inte sätta ett
            slutdatum kommer du få påminnelser efter 6 månader att förlänga
            inlägget om det fortfarande är aktuellt, annars kommer det tas bort.
            <br />
            <br />
            Detta görs för att hålla Återbrukslabbet uppdaterat och säkerställa
            att inläggen som finns på sidan är aktuella.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-start">
            Varför syns slutdatum bara på vissa inlägg?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Om en användare sätter ett specifikt slutdatum på sitt inlägg kommer
            det datumet visas på inlägget. Om inget slutdatum är satt kommer
            inget slutdatum visas på inlägget.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-start">
            Ett av mina inlägg verkar vara borttaget?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            Om du märker att ett av dina inlägg är borttaget kan det bero på att
            inlägget har nått sitt slutdatum utan att du har förlängt det. Det
            kan också bero på att en moderator har tagit bort ditt inlägg om det
            bryter mot våra användarvillkor. Om ett av dina inlägg är borttagna
            bör du ha fått ett mejl på din primära mejladress med anledningen.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-start">
            När jag tar bort mitt inlägg blir jag frågad om inlägget resulterade
            i en donation?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            När du ska ta bort ditt inlägg vill vi gärna vilja veta om inlägget
            resulterade i en lyckad donation. Det vill säga att labbutrustning
            blev skänkt. En donation kan vara lyckad även om inte all
            labbutrustning på inlägget blev donerat. Vi frågar om denna
            information enbart för statistik och för att hitta
            förbättringsmöjligheter.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

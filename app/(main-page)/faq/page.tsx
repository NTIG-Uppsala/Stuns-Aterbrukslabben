import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  return (
    <div className="flex flex-col w-[85ch] max-w-[100%] mx-auto px-6 py-8 md:mt-16 mt-12 rounded-md bg-secondary">
      <h1 className="md:text-2xl text-lg font-semibold">
        Vanliga frågor och svar
      </h1>
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Vad är Återbrukslabbet?</AccordionTrigger>
          <AccordionContent className="text-base">
            Återbrukslabbet är en webbplats där du kan lägga upp inlägg för att
            skänka bort eller efterfråga begagnad labbutrustning. Meningen är
            att laboratorium ska kunna skänka bort labbutrustning till ett
            pedagogiskt syfte istället för att det slängs onödigt.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Vad betyder de olika kategorierna?
          </AccordionTrigger>
          <AccordionContent className="text-base">
            En förbrukningsvara är menad att användas under en begränsad tid och
            behöver ersättas eller förnyas regelbundet. Förbrukningsvaror kan
            t.ex. inkludera saker som kemikalier, filter eller handskar. <br />{" "}
            Ett instrument/maskin är ett verktyg som används inom labb för att
            mäta värden eller utföra olika funktioner. Instrument/maskiner kan
            t.ex. inkludera mikroskop, spektrometrar och voltmetrar. <br />{" "}
            Inventarie är hjälpmedel som används i labbmiljöer för att
            underlätta i experiment. Inventarie kan t.ex. inkludera kolvar,
            vågar och provrör. <br /> Välj den kategori du anser att din produkt
            bäst hör till när du skapar ett inlägg.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

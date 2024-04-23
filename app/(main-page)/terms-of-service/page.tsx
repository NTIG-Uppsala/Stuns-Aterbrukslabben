export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col w-[85ch] max-w-[100%] mx-auto px-6 py-8 md:mt-16 mt-12 rounded-md bg-secondary">
      <h1 className="md:text-2xl text-lg font-semibold">
        Användarvillkor och integritetspolicy
      </h1>
      <p className="mt-1">
        Genom att skapa ett användarkonto på Återbrukslabbet godkänner du
        följande användarvillkor:
      </p>
      <ol className="flex flex-col gap-y-4 list-decimal md:px-8 px-4 mt-2">
        <li>
          <span className="font-semibold">Ansvar för kontoinformation: </span>{" "}
          <br />
          Du ansvarar för att tillhandahålla korrekt och uppdaterad information
          vid skapandet av ditt konto. Det är också ditt ansvar att skydda ditt
          lösenord och att inte dela dina inloggningsuppgifter med andra.
        </li>
        <li>
          <span className="font-semibold">
            Korrekt användning av tjänsten:{" "}
          </span>
          <br />
          Du samtycker till att använda Återbrukslabbet endast för lagliga
          ändamål och i enlighet med dessa användarvillkor. Det är förbjudet att
          använda plattformen för olaglig eller stötande verksamhet. Det är även
          förbjudet att utbyta pengar mot varor på plattformen.
        </li>
        <li>
          <span className="font-semibold">
            Integritet och personuppgifter:{" "}
          </span>
          <br />
          Vi respekterar din integritet och kommer att hantera dina
          personuppgifter i enlighet med gällande lagstiftning. Genom att
          använda plattformen samtycker du till vår behandling av dina
          personuppgifter i enlighet med densamma.
        </li>
        <li>
          <span className="font-semibold">Innehållsansvar: </span>
          <br />
          Du ansvarar för allt innehåll som du publicerar eller delar på
          Återbrukslabbet. Det är förbjudet att dela material som bryter mot
          upphovsrätten, är stötande, olagligt eller på annat sätt kränkande.
        </li>
        <li>
          <span className="font-semibold">Begränsningar av ansvar: </span>
          <br />
          Återbrukslabbet friskriver sig från ansvar för eventuella skador eller
          förluster som uppstår till följd av användningen av tjänsten. Vi
          tillhandahåller plattformen i befintligt skick och kan inte garantera
          dess tillgänglighet eller funktionalitet.
        </li>
        <li>
          <span className="font-semibold">
            Ändringar av användarvillkoren:{" "}
          </span>
          <br />
          Vi förbehåller oss rätten att när som helst ändra dessa
          användarvillkor. Eventuella ändringar kommer att meddelas på
          plattformen, och din fortsatta användning av tjänsten anses utgöra
          ditt godkännande av de ändrade villkoren.
        </li>
      </ol>
      <p className="mt-8">
        Genom att skapa ett användarkonto på Återbrukslabbet samtycker du till
        dessa användarvillkor och förbinder dig att följa dem. Om du inte
        godkänner villkoren, vänligen avstå från att använda tjänsten.
      </p>
      <p className="text-lg mt-4">Tack för att du valt Återbrukslabbet!</p>
    </div>
  );
}

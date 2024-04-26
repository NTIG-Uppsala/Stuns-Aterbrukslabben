export default function AboutPage() {
  return (
    <div className="flex flex-col w-[85ch] max-w-full mx-auto px-6 py-8 md:mt-16 mt-12 md:rounded-md bg-secondary">
      <h1 className="md:text-2xl text-lg font-semibold mb-4">
        Om Återbrukslabbet
      </h1>
      <div>
        Återbrukslabbet ger avställd labbutrustning nytt liv i skolan. Modern
        utrustning ökar undervisningens relevans, avlastar skolbudgetar, sparar
        planetens resurser och gör lärandet roligare. Företag har möjlighet att
        donera utrustning, inventarier och förbrukningsmaterial som de själva
        inte längre har nytta av. Lärare har möjlighet att efterfråga sådant som
        de behöver för att bedriva inspirerande och kvalitativ undervisning.
      </div>
      <br />
      <div>
        Återbrukslabbet har utvecklats i samarbete mellan STUNS (Stiftelsen för
        samverkan mellan universiteten i Uppsala, näringslivet och samhället)
        och elever som läser till gymnasieingenjör med inriktning mot
        mjukvarudesign på NTI Gymnasiet i Uppsala. All kodning har utförts av
        ett team om fyra elever under 10 veckors praktik, våren 2024.
      </div>
      <br />
      <div>
        Hösten 2024 utvärderas den första versionen av Återbrukslabbet av en
        testgrupp baserad i Uppsala, varpå ett nytt team med elever fortsätter
        att utveckla verktyget under våren 2025. Hösten 2025 planeras verktyget
        vara redo att tas i bruk nationellt.
      </div>
      <br />
      <div className="flex flex-col">
        Utvecklare våren 2024:
        <div>
          Simon Clavensjö,{" "}
          <a
            className="hover:underline text-blue-600"
            href="mailto:simon@clavensjo.se"
          >
            simon@clavensjo.se
          </a>
          ,{" "}
          <a
            className="hover:underline text-blue-600"
            href="https://www.linkedin.com/in/simon-clavensj%C3%B6-a6059021b/"
          >
            LinkedIn
          </a>
        </div>
        <div>
          Lukas Gustafsson,{" "}
          <a
            className="hover:underline text-blue-600"
            href="mailto:lukashansgustafsson@gmail.com"
          >
            lukashansgustafsson@gmail.com
          </a>
          ,{" "}
          <a
            className="hover:underline text-blue-600"
            href="https://www.linkedin.com/in/lukas-gustafsson-b4296b293/"
          >
            LinkedIn
          </a>
          , planerar att plugga pedagogik i Uppsala 2024/2025 och sedan plugga till dansare.
        </div>
        <div>
          Mohamad Hamdan,{" "}
          <a
            className="hover:underline text-blue-600"
            href="mailto:Hamdan756@icloud.com"
          >
            Hamdan756@icloud.com
          </a>
          ,{" "}
          <a
            className="hover:underline text-blue-600"
            href="https://www.linkedin.com/in/mohamad-hamdan-874670297/"
          >
            LinkedIn
          </a>
        </div>
        <div>
          Ambjörn Hogmark,{" "}
          <a
            className="hover:underline text-blue-600"
            href="mailto:ambehog04@gmail.com"
          >
            ambehog04@gmail.com
          </a>
          ,{" "}
          <a
            className="hover:underline text-blue-600"
            href="https://www.linkedin.com/in/ambj%C3%B6rn-hogmark-a86801293/"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <br />
      <div>
        Om du har frågor, eller vill ge feedback på verktyget, vänligen skriv en
        rad till{" "}
        <a
          className="hover:underline text-blue-600"
          href="mailto:erik.allard@stuns.se"
        >
          erik.allard@stuns.se
        </a>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function About() {
  return (
    <div className="relative bg-[#04242C] py-24 px-6">
      <Image
        src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PKKZW66DWYSCYGRE884BYY.png"
        alt="background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10 flex flex-col items-center gap-10 text-center">
        <div className="flex flex-col items-center gap-5 text-white">
          <h2 className="max-w-md font-garamond text-4xl font-bold uppercase">
            CHRUGER’S NO.10: EINE GEMÜTLICHE ECKE FÜR FEINSCHMECKER IN WIEN
          </h2>
          <div className="flex flex-col gap-4 max-w-sm font-crimson text-sm leading-relaxed text-white/80">
            <p>
              Chruger’s No.10 wurde 2021 in der historischen Krugerstraße 10
              gegründet – mitten im lebendigen Herzen Wiens. Das gemütliche
              Interieur in zentraler Lage, kombiniert mit unserer Leidenschaft
              für marktfrische Zutaten, ehrliche Küche und eine einladende
              Atmosphäre, prägt unsere Identität.
            </p>
            <p>
              Unsere Speisekarte bietet eine Vielzahl an Gerichten – von Tacos,
              Bowls und Burritos bis hin zu Salaten und Desserts – begleitet von
              ausgewählten Weinen, die perfekt für entspannte Momente sind.
            </p>
            <p>
              Mit unserer sorgfältig zusammengestellten Auswahl an köstlichen
              Kombinationen ist für jeden Geschmack etwas dabei. Sowohl
              Einheimische als auch reisende Feinschmecker lieben die Atmosphäre
              und Küche im Chruger’s No.10. Wir freuen uns darauf, Sie bei uns
              willkommen zu heißen!
            </p>
          </div>
        </div>
        <button className="bg-[#EFC9A5] px-5 py-3 font-crimson text-base font-semibold uppercase text-black">
          KONTAKT
        </button>
      </div>
    </div>
  );
}

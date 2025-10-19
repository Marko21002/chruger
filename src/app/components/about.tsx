import Image from "next/image";

export default function About() {
  return (
    <div className="relative bg-[#04242C] py-16 sm:py-24 lg:py-32 px-6">
      {/* Mobile/Tablet Image */}
      <Image
        src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PKKZW66DWYSCYGRE884BYY.png"
        alt="background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0 lg:hidden"
      />
      {/* Desktop Image */}
      <Image
        src="/about2.png"
        alt="background"
        fill
        className="z-0 hidden lg:block opacity-60"
      />
      {/* Gradient overlay for blending */}
      <div
        className="absolute inset-0 z-[1] opacity-70"
        style={{
          background: `radial-gradient(ellipse at center, transparent 20%, rgba(4, 36, 44, 0.3) 60%, rgba(4, 36, 44, 0.8) 90%)`,
        }}
      ></div>
      {/* Additional top/bottom linear gradients */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#04242C]/40 via-transparent via-30% to-[#04242C]/60"></div>
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-12 lg:gap-16 text-center">
        <Image
          src="/About.svg"
          alt="divider"
          width={352}
          height={29}
          className="w-full max-w-[280px] sm:max-w-[312px] lg:max-w-md"
        />
        <div className="flex flex-col items-center gap-4 sm:gap-5 text-white">
          <h2 className="max-w-md lg:max-w-4xl font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            CHRUGER&apos;S NO.10: EINE GEMÜTLICHE ECKE FÜR FEINSCHMECKER IN WIEN
          </h2>
          <div className="flex flex-col gap-4 max-w-sm lg:max-w-xl font-crimson text-sm sm:text-base lg:text-lg leading-relaxed text-white/80">
            <p>
              Chruger&apos;s No.10 wurde 2021 in der historischen Krugerstraße
              10 gegründet – mitten im lebendigen Herzen Wiens. Das gemütliche
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
              und Küche im Chruger&apos;s No.10. Wir freuen uns darauf, Sie bei
              uns willkommen zu heißen!
            </p>
          </div>
        </div>
        <button className="bg-[#EFC9A5] px-5 py-2.5 sm:px-6 sm:py-3 font-crimson text-sm sm:text-base font-semibold uppercase text-black transition-all duration-300 hover:bg-[#EFC9A5]/90 hover:scale-105 cursor-pointer">
          KONTAKT
        </button>
      </div>
    </div>
  );
}

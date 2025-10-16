import Image from "next/image";

export default function About() {
  return (
    <div className="w-full h-fit bg-[#04242C] relative px-4 pb-12 pt-12">
      <Image
        src="/about.png"
        alt="about"
        width={1000}
        height={1000}
        className="w-full h-full z-0 object-cover opacity-65 absolute top-0 left-0"
      />
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-white text-center z-10 text-4xl font-garamond font-semibold uppercase">
            Chruger’s No.10: Eine gemütliche Ecke für Feinschmecker in Wien
          </div>
          <div className="text-white text-center z-10 text-md font-crimson opacity-80">
            Chruger’s No.10 wurde 2021 in der historischen Krugerstraße 10
            gegründet – mitten im lebendigen Herzen Wiens. Das gemütliche
            Interieur in zentraler Lage, kombiniert mit unserer Leidenschaft für
            marktfrische Zutaten, ehrliche Küche und eine einladende Atmosphäre,
            prägt unsere Identität. Unsere Speisekarte bietet eine Vielzahl an
            Gerichten – von Tacos, Bowls und Burritos bis hin zu Salaten und
            Desserts – begleitet von ausgewählten Weinen, die perfekt für
            entspannte Momente sind. Mit unserer sorgfältig zusammengestellten
            Auswahl an köstlichen Kombinationen ist für jeden Geschmack etwas
            dabei. Sowohl Einheimische als auch reisende Feinschmecker lieben
            die Atmosphäre und Küche im Chruger’s No.10.Wir freuen uns darauf,
            Sie bei uns willkommen zu heißen!
          </div>
        </div>
        <button className="bg-[#F5C84F] z-10 uppercase font-crimson text-[#193039] w-full py-4 text-center font-bold border-2 border-transparent">
          Kontakt
        </button>
      </div>
    </div>
  );
}

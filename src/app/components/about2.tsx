export default function About2() {
  return (
    <div className="w-full h-auto pt-12">
      <div className="w-full h-screen bg-[#04242C] relative flex flex-col items-center pt-32 px-4">
        <img
          src="/about.png"
          alt="about2"
          className="w-full z-0 h-full absolute top-0 left-0 object-cover opacity-60"
        />
        <div className="flex items-center justify-center gap-4 z-10 text-white">
          <div>
            <img src="/path2.png" alt="path" />
          </div>
          <div className="text-md font-bold uppercase text-[#EFC9A4]">
            UNSERE GESCHICHTE
          </div>
          <div>
            <img src="/path2.png" alt="path" className="w-16" />
          </div>
        </div>

        <div className="z-10 text-white text-center mt-8 flex flex-col items-center gap-8">
          <h1 className="text-4xl font-bold max-w-lg">
            CHRUGER'S NO.10: EINE GEMÜTLICHE ECKE FÜR FEINSCHMECKER IN WIEN
          </h1>
          <p className="max-w-xl text-sm opacity-80">
            Chruger's No.10 wurde 2021 in der historischen Krugerstraße 10
            gegründet – mitten im lebendigen Herzen Wiens. Das gemütliche
            Interieur in zentraler Lage, kombiniert mit unserer Leidenschaft für
            marktfrische Zutaten, ehrliche Küche und eine einladende Atmosphäre,
            prägt unsere Identität. Unsere Speisekarte bietet eine Vielzahl an
            Gerichten – von Tacos, Bowls und Burritos bis hin zu Salaten und
            Desserts – begleitet von ausgewählten Weinen, die perfekt für
            entspannte Momente sind. Mit unserer sorgfältig zusammengestellten
            Auswahl an köstlichen Kombinationen ist für jeden Geschmack etwas
            dabei. Sowohl Einheimische als auch reisende Feinschmecker lieben
            die Atmosphäre und Küche im Chruger's No.10. Wir freuen uns darauf,
            Sie bei uns willkommen zu heißen!
          </p>
          <button className="bg-[#F5C84F] text-black font-bold py-4 px-12  mt-4">
            KONTAKT
          </button>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Delivery() {
  return (
    <section className="bg-[#F0E8E2] py-16 sm:py-24 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Image */}
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
          <Image
            src="/Delivery.png"
            alt="Delivery service"
            width={500}
            height={600}
            className="w-full max-w-md opacity-80 lg:max-w-md h-auto object-contain"
          />
        </div>

        {/* Right side - Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8">
            {/* Decorative element */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#04242C]/30"></div>
              <span className="text-[#04242C]/70 font-crimson text-sm uppercase tracking-widest">
                LIEFERDIENST
              </span>
              <div className="w-12 h-px bg-[#04242C]/30"></div>
            </div>

            {/* Main heading */}
            <h2 className="font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold text-[#04242C] uppercase leading-tight max-w-lg">
              JETZT BESTELLEN UND GENIESSEN
            </h2>

            {/* Description */}
            <p className="font-crimson text-base lg:text-lg text-[#04242C]/80 leading-relaxed max-w-lg">
              Bestelle deine Lieblingsgerichte ganz einfach online und lass sie
              dir bequem über Lieferando ins Haus. Während unserer
              Öffnungszeiten liefern wir dir frisch zubereitete Köstlichkeiten
              direkt bis an die Haustür – schnell, lecker und unkompliziert.
              Probier's gleich aus und hol dir den Geschmack von Chruger No:10
              nach Hause!
            </p>

            {/* CTA Button */}
            <button className="bg-[#04242C] text-white font-crimson font-semibold text-sm lg:text-base px-8 py-4 uppercase tracking-wide hover:bg-[#04242C]/90 transition-colors">
              ONLINE BESTELLEN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

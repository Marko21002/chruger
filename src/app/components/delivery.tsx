import Image from "next/image";

export default function Delivery() {
  return (
    <section className="bg-[#F0E8E2] py-16 sm:py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Biker image - peeks from left on desktop */}
      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-32">
        <Image
          src="/Delivery.png"
          alt="Delivery service"
          width={400}
          height={480}
          className="opacity-80 h-auto object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Mobile image */}
        <div className="lg:hidden flex justify-center mb-8">
          <Image
            src="/Delivery.png"
            alt="Delivery service"
            width={300}
            height={360}
            className="opacity-80 h-auto object-contain"
          />
        </div>

        {/* Content - always centered */}
        <div className="text-center">
          <div className="flex flex-col items-center gap-6 lg:gap-8">
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
              Probier&apos;s gleich aus und hol dir den Geschmack von Chruger
              No:10 nach Hause!
            </p>

            {/* CTA Button */}
            <button className="bg-[#04242C] text-white font-crimson font-semibold text-sm lg:text-base px-8 py-4 uppercase tracking-wide hover:bg-[#04242C]/90 transition-all duration-300 hover:scale-105 cursor-pointer">
              ONLINE BESTELLEN
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

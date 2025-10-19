import Image from "next/image";

export default function CTA() {
  return (
    <section className="relative bg-[#04242C] py-16 sm:py-24 lg:py-32 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <Image
        src="/hero2.png"
        alt="background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0 opacity-10"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#04242C]/80 via-[#04242C]/90 to-[#04242C]/80"></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#04242C]/60 via-transparent to-[#04242C]/60"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-16">
          {/* Top Decorative Element */}
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            {/* Decorative SVG */}
            <svg
              width="284"
              height="29"
              viewBox="0 0 284 29"
              fill="none"
              className="w-full max-w-[280px] sm:max-w-[312px] lg:max-w-sm"
            >
              <g clipPath="url(#clip0_cta)">
                <path
                  d="M0.512207 19.9477L32.0199 8.13232L63.5276 19.9477M63.5276 8.13232L32.0199 19.9477L0.512207 8.13232"
                  stroke="#EFC9A4"
                  strokeWidth="0.492308"
                />
              </g>
              <text
                x="142"
                y="20"
                textAnchor="middle"
                fill="#EFC9A4"
                className="font-garamond text-sm uppercase tracking-wide"
              >
                KONTAKT
              </text>
              <g clipPath="url(#clip1_cta)">
                <path
                  d="M220.462 19.9477L251.97 8.13232L283.478 19.9477M283.478 8.13232L251.97 19.9477L220.462 8.13232"
                  stroke="#EFC9A4"
                  strokeWidth="0.492308"
                />
              </g>
              <defs>
                <clipPath id="clip0_cta">
                  <rect
                    width="64"
                    height="12"
                    fill="white"
                    transform="translate(0.0200195 8.04004)"
                  />
                </clipPath>
                <clipPath id="clip1_cta">
                  <rect
                    width="64"
                    height="12"
                    fill="white"
                    transform="translate(219.97 8.04004)"
                  />
                </clipPath>
              </defs>
            </svg>

            {/* Main Heading */}
            <h2 className="font-garamond text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-white leading-tight max-w-4xl">
              HABEN SIE FRAGEN ZU UNSEREM <br />
              <span className="text-[#EFC9A5]">GEMÜTLICHEN CAFÉ?</span>
            </h2>
          </div>

          {/* Content Section */}
          <div className="flex flex-col items-center gap-8 sm:gap-10">
            {/* Description */}
            <p className="font-crimson text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed max-w-3xl">
              Kontaktieren Sie uns gerne bei Fragen zu unseren frischen Speisen,
              Öffnungszeiten oder besonderen Wünschen. G. Karin Freiler und
              unser freundliches Team helfen Ihnen gerne weiter!
            </p>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              {/* Phone Contact */}
              <div className="flex flex-col items-center gap-4 p-6 border border-[#EFC9A5]/30 rounded-lg bg-[#EFC9A5]/5">
                <h3 className="font-garamond text-xl lg:text-2xl font-semibold text-[#EFC9A5] uppercase">
                  Telefonisch
                </h3>
                <a
                  href="tel:+436641144550"
                  className="group flex items-center gap-3 bg-[#EFC9A5] hover:bg-[#EFC9A5]/90 text-black px-6 py-3 lg:px-8 lg:py-4 font-crimson font-bold text-base lg:text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  ANRUFEN
                </a>
                <div className="text-[#EFC9A5] font-crimson text-lg lg:text-xl font-semibold">
                  +43 (0) 664 114 45 50
                </div>
              </div>

              {/* Email Contact */}
              <div className="flex flex-col items-center gap-4 p-6 border border-[#EFC9A5]/30 rounded-lg bg-[#EFC9A5]/5">
                <h3 className="font-garamond text-xl lg:text-2xl font-semibold text-[#EFC9A5] uppercase">
                  E-Mail
                </h3>
                <a
                  href="mailto:info@chrugerno10.com"
                  className="group flex items-center gap-3 border-2 border-[#EFC9A5] text-[#EFC9A5] hover:bg-[#EFC9A5] hover:text-black px-6 py-3 lg:px-8 lg:py-4 font-crimson font-bold text-base lg:text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  <svg
                    className="w-5 h-5 lg:w-6 lg:h-6 group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  E-MAIL SENDEN
                </a>
                <div className="text-[#EFC9A5] font-crimson text-base lg:text-lg font-semibold">
                  info@chrugerno10.com
                </div>
              </div>
            </div>

            {/* Location & Hours Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mt-6">
              {/* Location */}
              <div className="text-center lg:text-left">
                <h3 className="font-garamond text-2xl lg:text-3xl font-semibold text-[#EFC9A5] uppercase mb-4">
                  Unser Standort
                </h3>
                <div className="font-crimson text-white/90 space-y-2">
                  <p className="text-lg lg:text-xl">G. Karin Freiler</p>
                  <p className="text-base lg:text-lg">Krugerstraße 10/8</p>
                  <p className="text-base lg:text-lg">1010 Wien</p>
                  <p className="text-sm lg:text-base text-white/70 mt-3">
                    Speisen vor Ort oder zum Mitnehmen
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="text-center lg:text-left">
                <h3 className="font-garamond text-2xl lg:text-3xl font-semibold text-[#EFC9A5] uppercase mb-4">
                  Öffnungszeiten
                </h3>
                <div className="font-crimson text-white/90 space-y-3">
                  <div>
                    <p className="text-base lg:text-lg font-semibold">
                      Montag - Freitag
                    </p>
                    <p className="text-sm lg:text-base">10:00 - 22:00 Uhr</p>
                    <p className="text-xs lg:text-sm text-white/70">
                      (Küche: 11:00 - 21:00 Uhr)
                    </p>
                  </div>
                  <div>
                    <p className="text-base lg:text-lg font-semibold">
                      Samstag
                    </p>
                    <p className="text-sm lg:text-base">13:00 - 22:00 Uhr</p>
                    <p className="text-xs lg:text-sm text-white/70">
                      (Küche: 13:00 - 21:00 Uhr)
                    </p>
                  </div>
                  <div>
                    <p className="text-base lg:text-lg font-semibold text-white/60">
                      Sonntag
                    </p>
                    <p className="text-sm lg:text-base text-white/60">
                      Geschlossen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

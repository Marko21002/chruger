import Image from "next/image";

export default function Frame() {
  return (
    <div className="relative w-full h-screen xl:h-[130vh] 2xl:h-[120vh] 3xl:h-[90vh] bg-[#04242C]">
      {/* Mobile/Tablet Background Image */}
      <Image
        src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PE6KJY4DJMPT6YMDXVVAC9.png"
        alt="background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0 opacity-20 lg:hidden"
        priority
      />
      {/* Desktop Background Image */}
      <Image
        src="/hero2.png"
        alt="background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0 opacity-20 hidden lg:block"
        priority
      />

      {/* Overlapping Image */}
      <Image
        src="/tacos.avif"
        alt="feature"
        width={290}
        height={248}
        className="z-10 absolute bottom-[-8%] xl:bottom-[-6%] 2xl:bottom-[-6%] 3xl:bottom-[-8%] left-1/2 -translate-x-1/2 w-9/12 max-w-[500px] xl:max-w-[600px] 2xl:max-w-[700px] 3xl:max-w-[800px] h-auto"
      />

      {/* Navbar */}
      <nav className="relative z-30 w-full px-6 py-4 lg:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Image
            src="/logo2.png"
            alt="Chruger No.10 Logo"
            width={120}
            height={40}
            className="h-8 w-auto xl:h-10 2xl:h-12"
          />

          {/* Navigation links - centered */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#"
              className="text-white font-crimson text-sm lg:text-base hover:text-[#EFC9A5] transition-colors uppercase tracking-wide"
            >
              ABOUT
            </a>
            <a
              href="#"
              className="text-white font-crimson text-sm lg:text-base hover:text-[#EFC9A5] transition-colors uppercase tracking-wide"
            >
              NEWS
            </a>
            <a
              href="#"
              className="text-white font-crimson text-sm lg:text-base hover:text-[#EFC9A5] transition-colors uppercase tracking-wide"
            >
              CONTACT
            </a>
            <a
              href="#"
              className="text-white font-crimson text-sm lg:text-base hover:text-[#EFC9A5] transition-colors uppercase tracking-wide"
            >
              PAGES
            </a>
          </div>

          {/* Right side with language switcher and order button */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Language switcher placeholder */}
            <div className="flex items-center gap-1 md:gap-2">
              <div className="w-5 h-3 md:w-6 md:h-4 bg-[#EFC9A5]/20 rounded"></div>
              <span className="text-[#EFC9A5] font-crimson text-xs md:text-sm">
                EN
              </span>
              <svg
                className="w-2 h-2 md:w-3 md:h-3 text-[#EFC9A5]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Order button */}
            <button className="bg-[#EFC9A5] text-black font-crimson font-semibold text-xs md:text-sm px-3 py-2 md:px-4 uppercase tracking-wide hover:bg-[#EFC9A5]/90 transition-colors">
              ORDER NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-8 pt-[10vh] lg:pt-[15vh] xl:pt-[12vh] 2xl:pt-[10vh] 3xl:pt-[15vh] h-full text-center p-4">
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-4xl w-full font-garamond font-semibold uppercase lg:text-6xl 2xl:text-7xl 3xl:text-8xl">
            KÖSTLICHES <br className="lg:hidden block" /> ESSEN & EIN
            <br className="hidden md:block" /> WUNDERVOLLES GENUSSERLEBNIS
          </h1>
          <p className="text-white opacity-60  text-xs max-w-xl mx-auto font-crimson lg:text-lg 2xl:text-xl 3xl:text-2xl 2xl:max-w-2xl 3xl:max-w-4xl">
            Inspiriert von Reisen und der Liebe zu verschiedenen Kulturen bietet
            das Chruger No:10 hausgemachte Köstlichkeiten aus frischen Zutaten –
            komm vorbei und genieße sie!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 w-fit">
          <button className="bg-[#EFC9A5] font-crimson text-black w-full lg:w-auto whitespace-nowrap shrink-0 px-6 py-3 2xl:px-8 2xl:py-4 3xl:px-10 3xl:py-5 uppercase font-semibold text-base 2xl:text-lg 3xl:text-xl">
            UNSERE SPEISEKARTE
          </button>
          <button className="border border-white text-white font-crimson w-full lg:w-auto whitespace-nowrap shrink-0 px-6 py-3 2xl:px-8 2xl:py-4 3xl:px-10 3xl:py-5 uppercase font-semibold text-base 2xl:text-lg 3xl:text-xl">
            Online bestellen
          </button>
        </div>
      </div>
    </div>
  );
}

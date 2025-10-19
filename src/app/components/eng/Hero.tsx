import Image from "next/image";
import Link from "next/link";

export default function Frame() {
  return (
    <div className="relative w-full min-h-[700px] h-[95vh] md:h-[100vh] xl:h-[115vh] 2xl:h-[120vh] 3xl:h-[90vh] bg-[#04242C]">
      {/* Mobile/Tablet Background Image */}
      <Image
        src="/hero.png"
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
        className="z-10 absolute bottom-0 translate-y-[30%] sm:translate-y-[35%] md:translate-y-[35%] lg:translate-y-[30%] xl:translate-y-[25%] 2xl:translate-y-[20%] 3xl:translate-y-[15%] left-1/2 -translate-x-1/2 w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 3xl:w-4/12 max-w-[320px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[600px] 2xl:max-w-[650px] 3xl:max-w-[700px] h-auto"
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
            {/* Language switcher */}
            <Link
              href="/"
              className="flex items-center gap-1 md:gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-5 h-3 md:w-6 md:h-4 rounded bg-gradient-to-b from-black to-red-600 via-red-500 border border-yellow-400 border-opacity-50"></div>
              <span className="text-[#EFC9A5] font-crimson text-sm md:text-sm">
                DE
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
            </Link>

            {/* Order button */}
            <button className="bg-[#EFC9A5] text-black font-crimson font-semibold text-xs md:text-sm px-4 py-3 md:px-6 uppercase tracking-wide hover:bg-[#EFC9A5]/90 transition-colors">
              ORDER NOW
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-8 pt-[9.5vh] lg:pt-[12vh] xl:pt-[12vh] 2xl:pt-[10vh] 3xl:pt-[10vh] pb-40 sm:pb-44 md:pb-48 lg:pb-52 xl:pb-56 2xl:pb-60 3xl:pb-64 min-h-[calc(100%-8rem)] text-center px-4">
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-4xl w-full font-garamond font-semibold uppercase lg:text-6xl 2xl:text-7xl 3xl:text-8xl">
            DELICIOUS <br className="lg:hidden block" /> FOOD & A
            <br className="hidden md:block" /> WONDERFUL DINING EXPERIENCE
          </h1>
          <p className="text-white opacity-80  text-xs max-w-xl mx-auto font-crimson lg:text-lg 2xl:text-xl 3xl:text-2xl 2xl:max-w-2xl 3xl:max-w-4xl">
            Inspired by travel and love for different cultures, Chruger No:10
            offers homemade delicacies made from fresh ingredients – come by and
            enjoy them!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 w-fit">
          <button className="bg-[#EFC9A5] font-crimson text-black w-full lg:w-auto whitespace-nowrap shrink-0 px-6 py-3 2xl:px-8 2xl:py-4 3xl:px-10 3xl:py-5 uppercase font-semibold text-base 2xl:text-lg 3xl:text-xl">
            OUR MENU
          </button>
          <button className="border border-white text-white font-crimson w-full lg:w-auto whitespace-nowrap shrink-0 px-6 py-3 2xl:px-8 2xl:py-4 3xl:px-10 3xl:py-5 uppercase font-semibold text-base 2xl:text-lg 3xl:text-xl">
            ORDER ONLINE
          </button>
        </div>
      </div>
    </div>
  );
}

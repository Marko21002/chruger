import Image from "next/image";

export default function Menu() {
  return (
    <section className="bg-[#04242C] py-10 px-4 sm:py-12 sm:px-6 flex flex-col items-center justify-center gap-8 sm:gap-10 text-center">
      <Image
        src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PMJKHQ8B5RT8BXPXZN4790.svg"
        alt="divider"
        width={312}
        height={29}
        className="w-full max-w-[280px] sm:max-w-[312px]"
      />

      <div className="flex flex-col items-center gap-4 sm:gap-5">
        <h2 className="text-white font-garamond text-3xl sm:text-4xl font-bold max-w-md">
          UNSERE SPEZIALITÄTEN
        </h2>
        <p className="text-white/80 font-crimson text-xs sm:text-sm max-w-sm leading-relaxed">
          Genießen Sie unsere köstlichen, hausgemachten Gerichte – frisch,
          ehrlich und voller Geschmack. Im Chruger’s No.10 erwartet Sie eine
          kulinarische Reise mit immer neuen Köstlichkeiten.
        </p>
      </div>

      <div className="flex items-center justify-between gap-2 sm:gap-4 w-full">
        <Image
          src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PRTKFCDYGVQNAEFEB7PWFH.svg"
          alt="left arrow"
          width={30}
          height={30}
          className="cursor-pointer shrink-0"
        />
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          <Image
            src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PMMYNTNYRHEBSTBNV0W4AJ.png"
            alt="Tacos"
            width={226}
            height={217}
            className="w-full max-w-[180px] sm:max-w-[226px] h-auto"
          />
          <h3 className="text-[#EFC9A5] font-garamond text-xl sm:text-2xl font-bold">
            TACOS
          </h3>
        </div>
        <Image
          src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PRTKFCDYGVQNAEFEB7PWFH.svg"
          alt="right arrow"
          width={30}
          height={30}
          className="rotate-180 cursor-pointer shrink-0"
        />
      </div>

      <button className="border-2 border-[#EFC9A5] text-white font-crimson text-sm sm:text-base font-semibold uppercase px-5 py-2.5 sm:px-6 sm:py-3">
        KOMPLETTES MENÜ
      </button>
    </section>
  );
}

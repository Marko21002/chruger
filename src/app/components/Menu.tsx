import Image from "next/image";

export default function Menu() {
  return (
    <div className="bg-[#04242C] py-12 px-6 md:py-16">
      <div className="flex flex-col items-center justify-center gap-10 text-center md:gap-12">
        <Image
          src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PMJKHQ8B5RT8BXPXZN4790.svg"
          alt="divider"
          width={312}
          height={29}
          className="w-full max-w-[312px]"
        />

        <div className="flex flex-col items-center gap-4 md:gap-5">
          <h2 className="max-w-md font-garamond text-3xl font-bold uppercase text-white md:text-4xl">
            UNSERE SPEZIALITÄTEN
          </h2>
          <p className="max-w-sm font-crimson text-base leading-relaxed text-white/80 md:text-sm">
            Genießen Sie unsere köstlichen, hausgemachten Gerichte – frisch,
            ehrlich und voller Geschmack. Im Chruger’s No.10 erwartet Sie eine
            kulinarische Reise mit immer neuen Köstlichkeiten.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-5">
          <Image
            src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PMMYNTNYRHEBSTBNV0W4AJ.png"
            alt="Tacos"
            width={238}
            height={240}
            className="h-auto w-full max-w-[238px]"
          />
          <h3 className="font-garamond text-xl font-bold uppercase text-[#F5C84F] md:text-2xl">
            TACOS
          </h3>
        </div>

        <button className="bg-[#F5C84F] px-5 py-3 font-crimson text-base font-semibold uppercase text-black">
          KOMPLETTES MENÜ
        </button>
      </div>
    </div>
  );
}

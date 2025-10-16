"use client";
import { Carousel } from "@ark-ui/react/carousel";
import Image from "next/image";

const foodItems = [
  {
    name: "TACOS",
    image:
      "https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PMMYNTNYRHEBSTBNV0W4AJ.png",
  },
  {
    name: "BURRITOS",
    image: "/Taco.png",
  },
  {
    name: "NACHOS",
    image: "/Tacos.png",
  },
  {
    name: "QUESADILLAS",
    image:
      "https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PMMYNTNYRHEBSTBNV0W4AJ.png",
  },
];

export default function Menu() {
  return (
    <section className="bg-[#04242C] py-10 px-4 sm:py-12 sm:px-6 flex flex-col items-center justify-center gap-8 sm:gap-10 text-center overflow-hidden">
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

      <Carousel.Root
        className="w-full max-w-sm sm:max-w-md relative"
        slideCount={foodItems.length}
        slidesPerView={1}
        looping
      >
        <Carousel.ItemGroup>
          {foodItems.map((item, index) => (
            <Carousel.Item
              key={index}
              index={index}
              className="flex flex-col items-center gap-4"
            >
              <div
                className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <h3 className="text-[#EFC9A5] font-garamond text-xl sm:text-2xl font-bold">
                {item.name}
              </h3>
            </Carousel.Item>
          ))}
        </Carousel.ItemGroup>
        <Carousel.Control className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-2 sm:px-0">
          <Carousel.PrevTrigger className="bg-[#EFC9A5]/80 text-[#04242C] rounded-full p-2 disabled:opacity-50 transition-opacity hover:bg-[#EFC9A5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </Carousel.PrevTrigger>
          <Carousel.NextTrigger className="bg-[#EFC9A5]/80 text-[#04242C] rounded-full p-2 disabled:opacity-50 transition-opacity hover:bg-[#EFC9A5]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </Carousel.NextTrigger>
        </Carousel.Control>
      </Carousel.Root>

      <button className="border-2 border-[#EFC9A5] text-white font-crimson text-sm sm:text-base font-semibold uppercase px-5 py-2.5 sm:px-6 sm:py-3">
        KOMPLETTES MENÜ
      </button>
    </section>
  );
}

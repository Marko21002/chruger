"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="bg-[#04242C] text-center overflow-hidden">
      <div className="pt-10 sm:pt-12 px-4 sm:px-6 flex flex-col items-center gap-8 sm:gap-10">
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
      </div>

      <motion.div
        ref={carousel}
        className="cursor-grab py-8 sm:py-10"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex items-center pl-[15%] pr-[15%] sm:pl-[25%] sm:pr-[25%] md:pl-[35%] md:pr-[35%]"
        >
          {foodItems.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[70%] sm:min-w-[50%] md:min-w-[30%] p-2 flex flex-col items-center gap-4"
            >
              <motion.div
                className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-cover bg-center shadow-lg"
                style={{ backgroundImage: `url(${item.image})` }}
                initial={{ opacity: 0.3, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.8 }}
              >
                <div className="w-full h-full rounded-full ring-2 ring-white/10 ring-inset"></div>
              </motion.div>
              <h3 className="text-[#EFC9A5] font-garamond text-xl sm:text-2xl font-bold">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <div className="pb-10 sm:pb-12 px-4 sm:px-6 flex flex-col items-center gap-6">
        <div className="flex items-center justify-center gap-2 text-white/50">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            animate={{ x: [-3, 3, -3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </motion.svg>
          <span className="font-crimson text-sm uppercase tracking-widest">
            Drag
          </span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            animate={{ x: [3, -3, 3] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </motion.svg>
        </div>
        <button className="border-2 border-[#EFC9A5] text-white font-crimson text-sm sm:text-base font-semibold uppercase px-5 py-2.5 sm:px-6 sm:py-3 transition-colors duration-300 hover:bg-[#EFC9A5] hover:text-[#04242C]">
          KOMPLETTES MENÜ
        </button>
      </div>
    </section>
  );
}

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

      <motion.div
        ref={carousel}
        className="cursor-grab w-full"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex items-center"
        >
          {foodItems.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[70%] sm:min-w-[50%] md:min-w-[30%] p-4 flex flex-col items-center gap-4"
            >
              <motion.div
                className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
                initial={{ opacity: 0.5, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.5 }}
              ></motion.div>
              <h3 className="text-[#EFC9A5] font-garamond text-xl sm:text-2xl font-bold">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <button className="border-2 border-[#EFC9A5] text-white font-crimson text-sm sm:text-base font-semibold uppercase px-5 py-2.5 sm:px-6 sm:py-3">
        KOMPLETTES MENÜ
      </button>
    </section>
  );
}

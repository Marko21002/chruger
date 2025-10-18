"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [currentPage, setCurrentPage] = useState(0);

  const getVisibleItems = () => {
    const items = [];
    for (let i = -1; i <= 1; i++) {
      let index = currentPage + i;
      if (index < 0) {
        index = foodItems.length + index;
      } else if (index >= foodItems.length) {
        index = index - foodItems.length;
      }
      items.push({ ...foodItems[index], originalIndex: index });
    }
    return items;
  };

  return (
    <section className="bg-[#04242C] py-16 sm:py-24 lg:py-32 text-center overflow-hidden">
      <div className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-16">
        <Image
          src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PMJKHQ8B5RT8BXPXZN4790.svg"
          alt="divider"
          width={312}
          height={29}
          className="w-full max-w-[280px] sm:max-w-[312px] lg:max-w-md"
        />
        <div className="flex flex-col items-center gap-4 sm:gap-5 px-4">
          <h2 className="text-white font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold max-w-lg">
            OUR SPECIALTIES
          </h2>
          <p className="text-white/80 font-crimson text-sm sm:text-base lg:text-lg max-w-md lg:max-w-xl leading-relaxed">
            Enjoy our delicious, homemade dishes – fresh, honest and full of
            flavor. At Chruger's No.10, a culinary journey with ever-new
            delicacies awaits you.
          </p>
        </div>

        <Carousel.Root
          slideCount={foodItems.length}
          page={currentPage}
          onPageChange={(e) => setCurrentPage(e.page)}
          className="w-full max-w-5xl"
          orientation="horizontal"
          loop={true}
        >
          <div className="relative w-full h-[350px] sm:h-[400px] lg:h-[500px] flex flex-col items-center justify-center">
            <div className="relative flex justify-center items-center h-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  className="flex items-center justify-center gap-8 sm:gap-12 lg:gap-16"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  {getVisibleItems().map((item, i) => {
                    const isCenter = i === 1;
                    return (
                      <motion.div
                        key={`${item.name}-${currentPage}-${i}`}
                        className="flex flex-col items-center gap-4 sm:gap-6"
                        initial={{
                          scale: isCenter ? 0.9 : 0.7,
                          opacity: isCenter ? 0.8 : 0.4,
                          x: i === 0 ? -100 : i === 2 ? 100 : 0,
                        }}
                        animate={{
                          scale: isCenter ? 1 : 0.75,
                          opacity: isCenter ? 1 : 0.6,
                          x: i === 0 ? -60 : i === 2 ? 60 : 0,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                          delay: i * 0.1,
                        }}
                        style={{ zIndex: isCenter ? 10 : 5 }}
                        whileHover={{
                          scale: isCenter ? 1.05 : 0.8,
                          transition: { duration: 0.3 },
                        }}
                      >
                        <div className="relative">
                          <motion.div
                            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-72 lg:h-72 rounded-full bg-cover bg-center shadow-2xl relative overflow-hidden"
                            style={{ backgroundImage: `url(${item.image})` }}
                            whileHover={{
                              rotate: isCenter ? 5 : 0,
                              transition: { duration: 0.3 },
                            }}
                          >
                            {!isCenter && (
                              <div className="absolute inset-0 bg-black/30 rounded-full backdrop-blur-[1px]" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-full" />
                          </motion.div>
                          {isCenter && (
                            <motion.div
                              className="absolute -inset-2 rounded-full border-2 border-[#EFC9A5]/50"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6, delay: 0.3 }}
                            />
                          )}
                        </div>
                        <motion.h3
                          className={`font-garamond text-lg sm:text-xl lg:text-2xl uppercase tracking-[0.2em] text-center ${
                            isCenter ? "text-[#EFC9A5]" : "text-[#EFC9A5]/60"
                          }`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: isCenter ? 1 : 0.6, y: 0 }}
                          transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
                        >
                          {item.name}
                        </motion.h3>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>

            <Carousel.Control className="flex items-center justify-center gap-8 mt-8">
              <Carousel.PrevTrigger className="bg-[#EFC9A5]/80 text-[#04242C] rounded-full p-3 transition-transform hover:scale-110 active:scale-95">
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
              <Carousel.NextTrigger className="bg-[#EFC9A5]/80 text-[#04242C] rounded-full p-3 transition-transform hover:scale-110 active:scale-95">
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
          </div>
        </Carousel.Root>
        <button className="border-2 border-[#EFC9A5] text-white font-crimson text-sm sm:text-base font-semibold uppercase px-5 py-2.5 sm:px-6 sm:py-3 transition-colors hover:bg-[#EFC9A5] hover:text-[#04242C]">
          FULL MENU
        </button>
      </div>
    </section>
  );
}

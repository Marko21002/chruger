"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Frame() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative w-full h-screen bg-[#04242C]">
      {/* Mobile/Tablet Background Image */}
      <Image
        src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PE6KJY4DJMPT6YMDXVVAC9.png"
        alt="background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0 opacity-30 lg:hidden"
        priority
      />
      {/* Desktop Background Image */}
      <Image
        src="/hero2.png"
        alt="background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0 opacity-30 hidden lg:block"
        priority
      />

      {/* Overlapping Image */}
      <Image
        src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PE90D7NKHZG4WJ7ZXF437C.png"
        alt="feature"
        width={290}
        height={248}
        className="z-10 absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-9/12 max-w-[600px] h-auto"
      />

      {/* Navbar */}
      <nav className="relative z-30 w-full px-6 py-4 lg:py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo placeholder */}
          <div className="w-24 h-8 bg-[#EFC9A5]/20 rounded"></div>

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
          <div className="hidden md:flex items-center gap-4">
            {/* Language switcher placeholder */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-4 bg-[#EFC9A5]/20 rounded"></div>
              <span className="text-[#EFC9A5] font-crimson text-sm">EN</span>
              <svg
                className="w-3 h-3 text-[#EFC9A5]"
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
            <button className="bg-[#EFC9A5] text-black font-crimson font-semibold text-sm px-4 py-2 uppercase tracking-wide hover:bg-[#EFC9A5]/90 transition-colors">
              ORDER NOW
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-[#EFC9A5] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                }
              />
            </motion.svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden relative z-30 bg-[#04242C]/95 backdrop-blur-sm border-t border-[#EFC9A5]/20"
          >
            <div className="px-6 py-4 space-y-4">
              <motion.a
                href="#"
                className="block text-white font-crimson text-base hover:text-[#EFC9A5] transition-colors uppercase tracking-wide py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                ABOUT
              </motion.a>
              <motion.a
                href="#"
                className="block text-white font-crimson text-base hover:text-[#EFC9A5] transition-colors uppercase tracking-wide py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                NEWS
              </motion.a>
              <motion.a
                href="#"
                className="block text-white font-crimson text-base hover:text-[#EFC9A5] transition-colors uppercase tracking-wide py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                CONTACT
              </motion.a>
              <motion.a
                href="#"
                className="block text-white font-crimson text-base hover:text-[#EFC9A5] transition-colors uppercase tracking-wide py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                PAGES
              </motion.a>

              {/* Mobile language switcher and order button */}
              <motion.div
                className="pt-4 border-t border-[#EFC9A5]/20 space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-6 h-4 bg-[#EFC9A5]/20 rounded"></div>
                  <span className="text-[#EFC9A5] font-crimson text-sm">
                    EN
                  </span>
                  <svg
                    className="w-3 h-3 text-[#EFC9A5]"
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
                <button className="w-full bg-[#EFC9A5] text-black font-crimson font-semibold text-sm py-3 uppercase tracking-wide hover:bg-[#EFC9A5]/90 transition-colors">
                  ORDER NOW
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-8 pt-[10vh] lg:pt-[15vh] h-full text-center p-4">
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-4xl w-full  font-garamond font-bold uppercase lg:text-6xl">
            KÖSTLICHES <br className="lg:hidden block" /> ESSEN & EIN
            <br className="hidden md:block" /> WUNDERVOLLES GENUSSERLEBNIS
          </h1>
          <p className="text-white text-xs max-w-xl mx-auto font-crimson lg:text-lg">
            Inspiriert von Reisen und der Liebe zu verschiedenen Kulturen bietet
            das Chruger No:10 hausgemachte Köstlichkeiten aus frischen Zutaten –
            komm vorbei und genieße sie!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-3 w-fit">
          <button className="bg-[#EFC9A5] font-crimson text-black w-full lg:w-auto whitespace-nowrap shrink-0 px-6 py-3 uppercase font-semibold text-base">
            UNSERE SPEISEKARTE
          </button>
          <button className="border border-white text-white font-crimson w-full lg:w-auto whitespace-nowrap shrink-0 px-6 py-3 uppercase font-semibold text-base">
            Online bestellen
          </button>
        </div>
      </div>
    </div>
  );
}

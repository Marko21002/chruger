"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative bg-[#04242C] py-16 sm:py-24 lg:py-32 px-6"
    >
      {/* Mobile/Tablet Image */}
      <Image
        src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PKKZW66DWYSCYGRE884BYY.png"
        alt="background"
        fill
        style={{ objectFit: "cover" }}
        className="z-0 lg:hidden"
      />
      {/* Desktop Image */}
      <Image
        src="/about2.png"
        alt="background"
        fill
        className="z-0 hidden lg:block opacity-60"
      />
      {/* Gradient overlay for blending */}
      <div
        className="absolute inset-0 z-[1] opacity-70"
        style={{
          background: `radial-gradient(ellipse at center, transparent 20%, rgba(4, 36, 44, 0.3) 60%, rgba(4, 36, 44, 0.8) 90%)`,
        }}
      ></div>
      {/* Additional top/bottom linear gradients */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#04242C]/40 via-transparent via-30% to-[#04242C]/60"></div>
      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-12 lg:gap-16 text-center">
        <Image
          src="/About.svg"
          alt="divider"
          width={352}
          height={29}
          className={`w-full max-w-[280px] sm:max-w-[312px] lg:max-w-md transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />
        <div className="flex flex-col items-center gap-4 sm:gap-5 text-white">
          <h2
            className={`max-w-md lg:max-w-4xl font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold uppercase transition-all duration-1000 delay-200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            CHRUGER&apos;S NO.10: A COZY CORNER FOR GOURMETS IN VIENNA
          </h2>
          <div className="flex flex-col gap-4 max-w-sm lg:max-w-xl font-crimson text-sm sm:text-base lg:text-lg leading-relaxed text-white/80">
            <p
              className={`transition-all duration-800 delay-400 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Chruger&apos;s No.10 was founded in 2021 on the historic
              Krugerstraße 10 – right in the vibrant heart of Vienna. The cozy
              interior in a central location, combined with our passion for
              market-fresh ingredients, honest cuisine and an inviting
              atmosphere, shapes our identity.
            </p>
            <p
              className={`transition-all duration-800 delay-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Our menu offers a variety of dishes – from tacos, bowls and
              burritos to salads and desserts – accompanied by selected wines
              that are perfect for relaxed moments.
            </p>
            <p
              className={`transition-all duration-800 delay-800 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              With our carefully curated selection of delicious combinations,
              there&apos;s something for every taste. Both locals and traveling
              gourmets love the atmosphere and cuisine at Chruger&apos;s No.10.
              We look forward to welcoming you!
            </p>
          </div>
        </div>
        <button
          className={`bg-[#EFC9A5] px-5 py-2.5 sm:px-6 sm:py-3 font-crimson text-sm sm:text-base font-semibold uppercase text-black transition-all duration-800 ease-out hover:bg-[#EFC9A5]/90 hover:scale-105 cursor-pointer ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          CONTACT
        </button>
      </div>
    </div>
  );
}

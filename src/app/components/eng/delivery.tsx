"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export default function Delivery() {
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
    <section
      ref={sectionRef}
      className="bg-[#F0E8E2] py-16 sm:py-24 lg:py-32 px-6"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left side - Image */}
        <div
          className={`order-2 lg:order-1 flex justify-center lg:justify-start transition-all duration-1200 ease-out ${
            isVisible ? "opacity-80 translate-x-0" : "opacity-0 -translate-x-12"
          }`}
        >
          <Image
            src="/Delivery.png"
            alt="Delivery service"
            width={500}
            height={600}
            className="w-full max-w-md lg:max-w-md h-auto object-contain"
          />
        </div>

        {/* Right side - Content */}
        <div className="order-1 lg:order-2 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8">
            {/* Decorative element */}
            <div
              className={`flex items-center gap-4 transition-all duration-1000 delay-200 ease-out ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div
                className={`w-12 h-px bg-[#04242C]/30 transition-all duration-800 delay-300 ease-out ${
                  isVisible ? "w-12 opacity-100" : "w-0 opacity-0"
                }`}
              ></div>
              <span
                className={`text-[#04242C]/70 font-crimson text-sm uppercase tracking-widest transition-all duration-800 delay-400 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                DELIVERY SERVICE
              </span>
              <div
                className={`w-12 h-px bg-[#04242C]/30 transition-all duration-800 delay-500 ease-out ${
                  isVisible ? "w-12 opacity-100" : "w-0 opacity-0"
                }`}
              ></div>
            </div>

            {/* Main heading */}
            <h2
              className={`font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold text-[#04242C] uppercase leading-tight max-w-lg transition-all duration-1000 delay-600 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              ORDER NOW AND ENJOY
            </h2>

            {/* Description */}
            <p
              className={`font-crimson text-base lg:text-lg text-[#04242C]/80 leading-relaxed max-w-lg transition-all duration-1000 delay-800 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Order your favorite dishes online easily and have them delivered
              conveniently to your home via Lieferando. During our opening
              hours, we deliver freshly prepared delicacies directly to your
              door – fast, delicious and uncomplicated. Try it out right away
              and bring the taste of Chruger No:10 home!
            </p>

            {/* CTA Button */}
            <button
              className={`bg-[#04242C] text-white font-crimson font-semibold text-sm lg:text-base px-8 py-4 uppercase tracking-wide hover:bg-[#04242C]/90 transition-all duration-800 ease-out hover:scale-105 cursor-pointer ${
                isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              ORDER ONLINE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

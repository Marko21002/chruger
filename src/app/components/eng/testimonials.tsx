"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "I absolutely loved the avocado toast with a poached egg! The quality of the ingredients and the attention to detail in the preparation made it a standout dish. I'm looking forward to my next visit for another round!",
    name: "Jessica Robak",
    title: "Food Enthusiast",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b762?w=150&h=150&fit=crop&crop=face",
  },
  {
    text: "The food was fantastic! The fresh ingredients and creative preparation really impressed me. The cozy atmosphere makes every visit a special experience.",
    name: "Michael Weber",
    title: "Regular Guest",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    text: "Chruger's No.10 has become my favorite place in Vienna. The combination of excellent food, friendly service and the wonderful atmosphere is simply unbeatable!",
    name: "Anna Müller",
    title: "Vienna Lover",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-[#04242C] py-16 sm:py-24 lg:py-32 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-16">
          {/* Top Decorative Element */}
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <Image
              src="/Testimomia.svg"
              alt="Reviews"
              width={284}
              height={29}
              className="w-full max-w-[280px] sm:max-w-[312px] lg:max-w-sm"
            />
            <h2 className="font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white max-w-2xl leading-tight">
              WHAT OUR GUESTS SAY
            </h2>
          </div>

          {/* Testimonial Content */}
          <div className="flex flex-col items-center gap-8 sm:gap-10">
            {/* Quote Icon */}
            <Image
              src="/Quotes.svg"
              alt="Quote"
              width={70}
              height={52}
              className="w-12 h-9 sm:w-16 sm:h-12 lg:w-[70px] lg:h-[52px] opacity-80"
            />

            {/* Testimonial Text */}
            <blockquote className="text-white/90 font-crimson text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl">
              {testimonials[currentIndex].text}
            </blockquote>

            {/* Author */}
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden">
                <Image
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="font-garamond text-lg sm:text-xl lg:text-2xl font-semibold text-[#EFC9A5]">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="font-crimson text-sm sm:text-base text-white/70 mt-1">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#EFC9A5]"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

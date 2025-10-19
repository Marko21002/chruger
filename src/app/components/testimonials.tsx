"use client";
import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    text: "Ich bin absolut begeistert von dem Avocado-Toast mit pochiertem Ei! Die Qualität der Zutaten und die Aufmerksamkeit für Details bei der Zubereitung haben es zu einem herausragenden Gericht gemacht. Ich freue mich auf meinen nächsten Besuch für eine weitere Runde!",
    name: "Jessica Robak",
    title: "Food Enthusiast",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b762?w=150&h=150&fit=crop&crop=face",
  },
  {
    text: "Das Essen war fantastisch! Die frischen Zutaten und die kreative Zubereitung haben mich wirklich beeindruckt. Das gemütliche Ambiente macht jeden Besuch zu einem besonderen Erlebnis.",
    name: "Michael Weber",
    title: "Stammkunde",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    text: "Chruger's No.10 ist zu meinem Lieblingsplatz in Wien geworden. Die Kombination aus ausgezeichnetem Essen, freundlichem Service und der wunderbaren Atmosphäre ist einfach unschlagbar!",
    name: "Anna Müller",
    title: "Wien Liebhaberin",
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
              src="/Testimonia.svg"
              alt="Bewertungen"
              width={284}
              height={29}
              className="w-full max-w-[280px] sm:max-w-[312px] lg:max-w-sm"
            />
            <h2 className="font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white max-w-2xl leading-tight">
              DAS SAGEN UNSERE GÄSTE
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

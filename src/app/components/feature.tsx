import Image from "next/image";

const features = [
  {
    icon: "/icons/f03wVnCYoLDS94bmuXGK52wK04.svg fill.png",
    title: "Köstliches Essen",
    description: "Frisch zubereitete Gerichte – voller Geschmack und Liebe",
  },
  {
    icon: "/icons/Icon → Icon.png",
    title: "Entspannung",
    description:
      "Genießen Sie Ihr Essen in einer gemütlichen und einladenden Atmosphäre",
  },
  {
    icon: "/icons/Icon → Icon-1.png",
    title: "Freundlicher Service",
    description: "Herzliches Lächeln und aufmerksamer Service bei jedem Besuch",
  },
  {
    icon: "/icons/RA1UDDdMpjRCnQ7M6QvNpBkwMB8.svg fill.png",
    title: "Frische Zutaten",
    description: "Nur die frischesten Zutaten für den besten Geschmack",
  },
];

export default function Feature() {
  return (
    <div className="w-full bg-[#F5EFEF] py-16 sm:py-24 lg:py-32 pt-24 sm:pt-32 lg:pt-40">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center gap-10 sm:gap-12 lg:gap-16">
          <h2 className="max-w-md lg:max-w-4xl font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-center text-[#193039]">
            Wir bieten eleganten Service Für Menschen
          </h2>
          <div className="w-full flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-12 lg:gap-8 xl:gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center gap-4 sm:gap-5 text-center px-4"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64}
                  height={64}
                  className="h-16 w-16 sm:h-20 sm:w-20 lg:h-16 lg:w-16"
                />
                <h2 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-garamond font-semibold text-[#193039]">
                  {feature.title}
                </h2>
                <p className="text-sm sm:text-base lg:text-sm font-crimson text-[#193039] max-w-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

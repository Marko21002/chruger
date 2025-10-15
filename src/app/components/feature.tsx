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
    <div className="w-full bg-[#F5EFEF] py-[15vh]">
      <div className="w-full">
        <div className="w-full flex flex-col items-center justify-center gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4 text-center px-8"
            >
              <Image
                src={feature.icon}
                alt={feature.title}
                width={64}
                height={64}
                className="h-16 w-16"
              />
              <h2 className="text-2xl font-garamond font-semibold text-[#193039]">
                {feature.title}
              </h2>
              <p className="text-md font-crimson text-[#193039] max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

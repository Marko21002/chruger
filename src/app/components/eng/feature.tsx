import Image from "next/image";

const features = [
  {
    icon: "/icons/f03wVnCYoLDS94bmuXGK52wK04.svg fill.png",
    title: "Delicious Food",
    description: "Freshly prepared dishes – full of taste and love",
  },
  {
    icon: "/icons/Icon → Icon.png",
    title: "Relaxation",
    description: "Enjoy your meal in a cozy and inviting atmosphere",
  },
  {
    icon: "/icons/Icon → Icon-1.png",
    title: "Friendly Service",
    description: "Warm smiles and attentive service with every visit",
  },
  {
    icon: "/icons/RA1UDDdMpjRCnQ7M6QvNpBkwMB8.svg fill.png",
    title: "Fresh Ingredients",
    description: "Only the freshest ingredients for the best taste",
  },
];

export default function Feature() {
  return (
    <div className="w-full bg-[#F5EFEF] py-16 sm:py-24 lg:py-32 pt-28 sm:pt-32 md:pt-36 lg:pt-40 xl:pt-44 2xl:pt-40 3xl:pt-36">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          {/* Image and Headline with smaller gap */}
          <div className="flex flex-col items-center gap-6 sm:gap-7 lg:gap-8">
            <Image
              src="/Fearute.svg"
              alt="divider"
              width={342}
              height={29}
              className="w-full max-w-[280px] sm:max-w-[312px] lg:max-w-md"
            />
            <h2 className="max-w-md lg:max-w-4xl font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-center text-[#193039]">
              We Offer Elegant Service For People
            </h2>
          </div>

          {/* Features with bigger gap from headline */}
          <div className="w-full flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-12 lg:gap-8 xl:gap-10 mt-14 sm:mt-16 lg:mt-20">
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

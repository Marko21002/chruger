import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="w-full h-screen bg-[#04242C] relative">
        <Image
          src="/hero.png"
          alt="hero"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-30"
          priority
        />
        <Image
          src="/Taco.png"
          alt="tacos"
          width={400}
          height={400}
          className="z-10 absolute bottom-[-10%] left-1/2 -translate-x-1/2"
        />
        <div className="z-10 flex flex-col items-center gap-8 justify-center px-12 pt-24 pb-72">
          <div className="flex flex-col gap-4 z-10">
            <div className="text-white text-4xl w-full max-w-xl text-center font-garamond font-bold uppercase">
              Köstliches <br /> Essen & ein wundervolles Genusserlebnis
            </div>
            <div className="text-white text-md text-center font-crimson">
              Inspiriert von Reisen und der Liebe zu verschiedenen Kulturen
              bietet das Chruger No:10 hausgemachte Köstlichkeiten aus frischen
              Zutaten – komm vorbei und genieße sie!
            </div>
          </div>
          <div className="flex z-10 flex-col items-center justify-center gap-4 w-full max-w-xl">
            <button className="bg-[#F5C84F] font-crimson text-[#193039] w-full py-4 uppercase font-bold border-2 border-transparent">
              Unsere Speisekarte
            </button>
            <button className="border-2 border-white text-white font-crimson w-full py-4 uppercase font-bold">
              Online bestellen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

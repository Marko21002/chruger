import Image from "next/image";

export default function Frame() {
  return (
    <div className="relative w-full h-screen bg-[#04242C]">
      {/* Background Image */}
      <Image
        src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PE6KJY4DJMPT6YMDXVVAC9.png"
        alt="background"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-30"
        priority
      />

      {/* Overlapping Image */}
      <Image
        src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PE90D7NKHZG4WJ7ZXF437C.png"
        alt="feature"
        width={290}
        height={248}
        className="z-10 absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-9/12 max-w-[290px] h-auto"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center gap-8 pt-[20vh] h-full text-center p-4">
        <div className="flex flex-col gap-5">
          <h1 className="text-white text-4xl w-full max-w-md font-garamond font-bold uppercase">
            KÖSTLICHES ESSEN & EIN WUNDERVOLLES GENUSSERLEBNIS
          </h1>
          <p className="text-white text-xs max-w-sm mx-auto font-crimson">
            Inspiriert von Reisen und der Liebe zu verschiedenen Kulturen bietet
            das Chruger No:10 hausgemachte Köstlichkeiten aus frischen Zutaten –
            komm vorbei und genieße sie!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 w-full max-w-xs">
          <button className="bg-[#F5C84F] font-crimson text-black w-full py-3 uppercase font-semibold text-base">
            UNSERE SPEISEKARTE
          </button>
          <button className="border border-white text-white font-crimson w-full py-3 uppercase font-semibold text-base">
            Online bestellen
          </button>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#04242C] w-screen h-[calc(100vh-72px)] flex flex-col relative">
      <div className=" flex flex-col items-center justify-center">
        <div className="w-full h-32 bg-white z-10"></div>
        <div className="w-full h-full">
          <Image
            src="/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="w-full absolute top-0 left-0 h-full object-cover opacity-25"
          />
          <img
            src="/Tacos.png"
            alt="hero"
            className="w-auto h-[300px] z-10 absolute bottom-[-80px] left-1/2 -translate-x-1/2 object-cover"
          />
        </div>
        <div className="mx-12 z-10 h-full px-4 flex flex-col items-center justify-center gap-4 md:max-w-3xl">
          <div className="text-white uppercase text-center  text-4xl md:text-6xl font-bold">
            Köstliches Essen & ein wundervolles Genusserlebnis
          </div>
          <div className="text-white text-center text-sm md:text-base opacity-80">
            Inspiriert von Reisen und der Liebe zu verschiedenen Kulturen bietet
            das Chruger No:10 hausgemachte Köstlichkeiten aus frischen Zutaten –
            komm vorbei und genieße sie!
          </div>
          <div className="flex flex-col md:flex-row w-full items-center justify-center gap-4 mt-4">
            <button className="border bg-[#F5C84F] text-black  border-white w-[80%] md:w-auto md:px-8 py-4">
              Jetzt bestellen
            </button>{" "}
            <button className="border text-white border-white w-[80%] md:w-auto md:px-8 py-4">
              Unsere Spezialitäten
            </button>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="w-full h-full bg-white"></div>
      </div>
    </div>
  );
}

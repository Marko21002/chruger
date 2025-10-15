import Image from "next/image";

export default function About() {
  return (
    <div className="w-full h-screen bg-[#04242C] relative">
      <Image
        src="/about.png"
        alt="about"
        width={1000}
        height={1000}
        className="w-full h-full object-cover opacity-60 absolute top-0 left-0"
      />
    </div>
  );
}

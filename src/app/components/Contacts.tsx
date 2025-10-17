import Image from "next/image";

export default function Contacts() {
  return (
    <section className="relative bg-[#04242C] py-16 sm:py-24 lg:py-32 px-6">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center gap-10 sm:gap-12 lg:gap-16 text-center">
        <Image
          src="https://workers.paper.design/file-assets/01K7PE35P5BXHACJRK07P8DF7H/01K7PMJKHQ8B5RT8BXPXZN4790.svg"
          alt="divider"
          width={312}
          height={29}
          className="w-full max-w-[280px] sm:max-w-[312px] lg:max-w-md"
        />

        <div className="flex flex-col items-center gap-4 sm:gap-5">
          <h2 className="text-white font-garamond text-3xl sm:text-4xl lg:text-5xl font-bold uppercase">
            Kontakt
          </h2>
          <p className="text-white/80 font-crimson text-sm sm:text-base lg:text-lg max-w-md lg:max-w-xl leading-relaxed">
            Wir freuen uns auf Ihre Nachricht. Rufen Sie uns an, schreiben Sie
            uns – oder kommen Sie einfach vorbei!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full text-left">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFC9A5]/15 text-[#EFC9A5]">
                  {/* Phone icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.086c.93 0 1.739.64 1.957 1.543l.638 2.654a2.25 2.25 0 01-.563 2.1l-1.016 1.016a15.75 15.75 0 006.516 6.516l1.016-1.016a2.25 2.25 0 012.1-.563l2.654.638a2.063 2.063 0 001.543 1.957V19.5a2.25 2.25 0 01-2.25 2.25H18c-8.008 0-14.5-6.492-14.5-14.5V6.75z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-garamond text-xl text-white">Telefon</h3>
                  <p className="font-crimson text-white/80 mt-1">
                    <a href="tel:+436601234567" className="hover:underline">
                      +43 660 123 4567
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#EFC9A5]/15 text-[#EFC9A5]">
                  {/* Location icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.54 22.351l-.005-.003-.019-.011a20.759 20.759 0 01-.31-.193 25.18 25.18 0 01-4.337-3.39C4.045 16.044 2.25 13.462 2.25 10.5 2.25 6.357 5.607 3 9.75 3s7.5 3.357 7.5 7.5c0 2.962-1.795 5.544-4.619 8.254a25.18 25.18 0 01-4.337 3.39 20.54 20.54 0 01-.31.193l-.018.01-.006.004a.75.75 0 01-.73 0zM9.75 12.75a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="font-garamond text-xl text-white">Adresse</h3>
                  <p className="font-crimson text-white/80 mt-1">
                    Krugerstraße 10, 1010 Wien
                  </p>
                  <p className="font-crimson text-white/70">
                    <a
                      href="https://maps.google.com/?q=Krugerstraße%2010%2C%201010%20Wien"
                      target="_blank"
                      rel="noreferrer"
                      className="underline decoration-[#EFC9A5]/60 underline-offset-4 hover:decoration-[#EFC9A5]"
                    >
                      Auf Karte ansehen
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
            <form className="flex flex-col gap-5" action="#" method="post">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-crimson text-sm text-white/80"
                  >
                    Ihr Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Max Mustermann"
                    className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 font-crimson text-white placeholder-white/60 outline-none transition focus:border-[#EFC9A5] focus:ring-2 focus:ring-[#EFC9A5]/30"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-crimson text-sm text-white/80"
                  >
                    E-Mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="max@example.com"
                    className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 font-crimson text-white placeholder-white/60 outline-none transition focus:border-[#EFC9A5] focus:ring-2 focus:ring-[#EFC9A5]/30"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="message"
                  className="font-crimson text-sm text-white/80"
                >
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Womit können wir helfen?"
                  className="w-full rounded-md border border-white/20 bg-white/10 px-4 py-3 font-crimson text-white placeholder-white/60 outline-none transition focus:border-[#EFC9A5] focus:ring-2 focus:ring-[#EFC9A5]/30"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-[#EFC9A5] text-black font-crimson font-semibold uppercase tracking-wide px-6 py-3 transition-colors hover:bg-[#EFC9A5]/90"
                >
                  Nachricht senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* subtle gradient overlay for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
    </section>
  );
}

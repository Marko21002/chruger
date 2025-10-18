import Image from "next/image";

export default function Contacts() {
  return (
    <div className="relative w-full h-screen bg-[#2D5A5A] flex">
      {/* Decorative Icon */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          className="text-white/20"
        >
          <path
            d="M30 5L35 20H50L38.5 28.5L43.5 43.5L30 35L16.5 43.5L21.5 28.5L10 20H25L30 5Z"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
          <circle
            cx="30"
            cy="30"
            r="25"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      {/* Header Text */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-30 text-center px-4">
        <h1 className="text-white font-garamond text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight max-w-4xl">
          Find us anytime here in this
          <br />
          <span className="font-light">amazing place</span>
        </h1>
      </div>

      {/* Left Side - Map */}
      <div className="w-full lg:w-1/2 relative">
        {/* Map Container */}
        <div className="absolute inset-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.0567234!2d16.3738!3d48.2082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07895d8a7f35%3A0x8b8c9d7f8a8b8c8d!2sKrugerstra%C3%9Fe%2010%2C%201010%20Wien%2C%20Austria!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale opacity-80"
          ></iframe>
        </div>

        {/* Map Overlay */}
        <div className="absolute inset-0 bg-[#2D5A5A]/30"></div>
      </div>

      {/* Right Side - Restaurant Interior */}
      <div className="w-full lg:w-1/2 relative">
        {/* Restaurant Interior Image */}
        <Image
          src="/about2.png"
          alt="Restaurant Interior"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2D5A5A]/70 via-[#2D5A5A]/50 to-transparent flex flex-col justify-end p-8 lg:p-12">
          {/* Contact Information */}
          <div className="text-white space-y-6">
            {/* Address and Contact */}
            <div className="space-y-2">
              <p className="font-crimson text-lg lg:text-xl">
                Krugerstraße 10/8, 1010 Vienna
              </p>
              <a
                href="tel:+436641144550"
                className="font-crimson text-base lg:text-lg text-white/80 hover:text-[#EFC9A5] transition-colors"
              >
                +43 (0) 664 114 45 50
              </a>
              <a
                href="mailto:info@chrugerno10.com"
                className="font-crimson text-base lg:text-lg text-white/80 hover:text-[#EFC9A5] transition-colors"
              >
                info@chrugerno10.com
              </a>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h3 className="font-garamond text-xl lg:text-2xl font-semibold text-[#EFC9A5]">
                Opening Hours:
              </h3>
              <div className="space-y-2 font-crimson text-base lg:text-lg">
                <div className="flex justify-between items-center">
                  <span className="text-white/90">Mon - Fri:</span>
                  <span className="text-white">10:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/90">Saturday:</span>
                  <span className="text-white">1:00 PM - 10:00 PM</span>
                </div>
                <div className="text-sm text-white/70 mt-2">
                  Kitchen: Mon-Fri 11:00 AM-9:00 PM, Sat 1:00 PM-9:00 PM
                </div>
              </div>
            </div>

            {/* Get Direction Button */}
            <div className="pt-4">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Krugerstraße+10/8,+1010+Wien,+Austria"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-[#EFC9A5] text-[#EFC9A5] hover:bg-[#EFC9A5] hover:text-black transition-all duration-300 px-8 py-3 font-crimson font-semibold uppercase tracking-wide"
              >
                → Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout Adjustments */}
      <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-transparent via-[#2D5A5A]/60 to-[#2D5A5A]/90"></div>
      <div className="lg:hidden absolute bottom-0 left-0 right-0 p-6 text-white">
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <p className="font-crimson text-lg">
              Krugerstraße 10/8, 1010 Vienna
            </p>
            <a
              href="tel:+436641144550"
              className="font-crimson text-base text-white/80 hover:text-[#EFC9A5] transition-colors"
            >
              +43 (0) 664 114 45 50
            </a>
            <a
              href="mailto:info@chrugerno10.com"
              className="font-crimson text-base text-white/80 hover:text-[#EFC9A5] transition-colors"
            >
              info@chrugerno10.com
            </a>
          </div>

          <div className="text-center space-y-2">
            <h3 className="font-garamond text-xl font-semibold text-[#EFC9A5]">
              Opening Hours:
            </h3>
            <div className="font-crimson text-sm space-y-1">
              <div>Mon-Fri: 10:00 AM-10:00 PM | Sat: 1:00 PM-10:00 PM</div>
              <div className="text-white/70">
                Kitchen: Mon-Fri 11:00 AM-9:00 PM, Sat 1:00 PM-9:00 PM
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Krugerstraße+10/8,+1010+Wien,+Austria"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#EFC9A5] text-[#EFC9A5] hover:bg-[#EFC9A5] hover:text-black transition-all duration-300 px-6 py-2 font-crimson font-semibold uppercase text-sm tracking-wide"
            >
              → Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

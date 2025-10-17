import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xl: "1280px",
        "2xl": "1400px",
        "3xl": "1900px",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        garamond: ["var(--font-cormorant-garamond)"],
        crimson: ["var(--font-crimson-text)"],
      },
    },
  },
  plugins: [],
};
export default config;

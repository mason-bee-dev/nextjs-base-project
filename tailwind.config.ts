import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-primary": "#111111",
        "yellow-primary": "#FFD700",
      },
      fontFamily: {
        "noto-sans": ["var(--font-noto-sans)"],
        "open-sans": ["var(--font-open-sans)"],
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
        "google-sans": ["var(--font-google-sans)"],
      },
    },
  },
  darkMode: "class",
}
export default config

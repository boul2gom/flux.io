import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#1E1E1E",
        foreground: "#AFAFAF",

        error: "#EA6E6C",
        warning: "#F9A52B",
      },

      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      gradientColorStops: {
        "accent-start": "#209996",
        "accent-end": "#A556F7",

        "base-start": "#2E3139",
        "base-end": "#16161E",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

export default config;

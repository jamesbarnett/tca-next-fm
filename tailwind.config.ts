import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": ["var(--ff-space-mono)"],
      }
    },
    colors: {
      accent: {
        100: "var(--clr-accent-100)",
        200: "var(--clr-accent-200)",
      },
      neutral: {
        900: "var(--clr-neutral-900)",
        500: "var(--clr-neutral-500)",
        400: "var(--clr-neutral-400)",
        300: "var(--clr-neutral-300)",
        200: "var(--clr-neutral-200)",
        100: "var(--clr-neutral-100)"
      },
    },
  },
  plugins: [],
};
export default config;

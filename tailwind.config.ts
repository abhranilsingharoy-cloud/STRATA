import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#FF5A2E",
        "accent-dark": "#CC3E18",
        "bg-dark": "#0B0B0C",
        "card-bg": "#EBEBEB",
        "neutral-gray": "#6B6B6B",
        "light-gray": "#F4F4F4",
      },
      fontFamily: {
        display: ["var(--font-archivo-black)", "Archivo Black", "Arial Black", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "clamp-hero": "clamp(4rem, 10vw, 12rem)",
        "clamp-h1": "clamp(2.5rem, 6vw, 7rem)",
        "clamp-h2": "clamp(2rem, 4vw, 4.5rem)",
      },
      screens: {
        xs: "375px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
        "3xl": "1920px",
      },
      spacing: {
        "section": "clamp(4rem, 8vw, 9rem)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-custom": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "marquee": "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      maxWidth: {
        grid: "1600px",
      },
    },
  },
  plugins: [],
};

export default config;

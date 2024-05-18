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
        "play-fair": "var(--font-play-fair)",
        "red-hat": "var(--font-red-hat)",
      },
      backgroundImage: {
        "hero-bg": "url('../public/hero image.png')",
      },
      spacing: {
        content: "1256px",
        "section-x": "64px",
        "section-y": "64px",
        header: "100px",
        "header-mobile": "80px",
        unset: "unset",
        "100svh": "100svh",
        "50svh": "50svh",
        "service-slide": "100%",
        "service-slide-sm": "45%",
        "testimonial-slide": "60%",
        "testimonial-slide-sm": "20%",
      },
      padding: {
        "hero-bg": "var(--hero-bg)",
        "button-x": "32px",
        "button-y": "10px",
      },
      minHeight: {},
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        dark: "#0E0E0E",
        "primary-light": "rgb(162 136 105 / 50%)",
        "light-dark": "#2A2A2A",
        "section-description": "#222222",
        divider: "#A288696B",
      },
      fontSize: {
        "xl-32": ["32px", { fontWeight: 500, letterSpacing: "0.08em" }],
        "xl-42": ["42px", { fontWeight: 500, letterSpacing: "0.08em" }],
      },
      borderRadius: {
        "68": "68px",
      },
      textColor: {
        title: "#FEFEFE99",
        "light-dark": "#A6A6A6",
      },
      letterSpacing: {
        base: "0.08em",
      },
      borderColor: {
        "offer-card": "#3F3F42",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(50%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        slideIn: "slideIn .1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;

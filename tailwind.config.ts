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
      padding: {
        "hero-bg": "var(--hero-bg)",
        section: "128px",
        "button-x": "32px",
        "button-y": "10px",
      },
      minHeight: {
        header: "100px",
      },
      colors: {
        primary: "var(--primary)",
        "btn-primary": "var(--primary)",
        "btn-light": "#fff",
      },
    },
  },
  plugins: [],
};
export default config;

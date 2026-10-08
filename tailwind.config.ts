import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f6f8f9",
          100: "#e9eef1",
          200: "#d3dce2",
          300: "#aebec9",
          400: "#839cae",
          500: "#647f94",
          600: "#51687b",
          700: "#445464",
          800: "#1f2f3d",
          900: "#16222d",
          950: "#0e161e",
        },
        teal: {
          50: "#f0faf9",
          100: "#dcf3f1",
          200: "#bce7e3",
          300: "#8ed4ce",
          400: "#5ab9b2",
          500: "#3a9e98",
          600: "#2c7f7b",
          700: "#266663",
          800: "#235252",
          900: "#214545",
        },
        cream: "#faf9f6",
        sand: "#f3f0e9",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(22,34,45,0.06), 0 8px 24px -12px rgba(22,34,45,0.18)",
        soft: "0 12px 40px -16px rgba(22,34,45,0.22)",
      },
    },
  },
  plugins: [],
};

export default config;

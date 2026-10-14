import type { Config } from "tailwindcss";

// Candidate HandzJ Tech palette — Phase 5 Increment 4.
// See DEVELOPMENT_CONTROL/DESIGN_SYSTEM.md.
// Not yet the final official brand palette; remains replaceable.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#101820",
          soft: "#263238",
        },
        ivory: "#F7F5EF",
        mist: "#E5E8E6",
        brand: {
          // Candidate primary (Signal Green) — provisional until final brand approval.
          DEFAULT: "#16836A",
          dark: "#0D5C4A",
          amber: "#D99A2B",
        },
      },
      maxWidth: {
        content: "1280px",
      },
      fontFamily: {
        sans: [
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;

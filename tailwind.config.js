/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  prefix: "",
  theme: {
    backgroundColor: "#F9FAFF",
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundColor: {
        gray: {
          200: "#EEE7E7",
          300: "#F9F9F9",
        },
        yellow: {
          400: "#FFCF4B",
        },
        bronze: "#263238",
        white: "#FFFFFF",
        footer: "#222E34",
      },
      colors: {
        gray: {
          100: "#F9FAFF",
          200: "#EEE7E7",
          300: "#DDDDDD",
        },
        yellow: {
          400: "#FFCF4B",
          500: "#F2B304",
          600: "#27AE60",
          700: "#FFBB00",
        },
        bronze: {
          100: "#263238CC",
          200: "#514D2D",
        },
        heading: {
          500: "#605F5F",
          600: "#263238",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Set Inter as the default sans font
      },
      fontSize: {
        "heading-1": "58px",
        "heading-2": "36px",
        "heading-3": "24px",
        "heading-4": "20px",
        "heading-5": "18px",
        "heading-6": "16px",
        "heading-7": "14px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0e1726",
          soft: "#1a2436",
        },
        brand: {
          50: "#eef5fc",
          100: "#d6e6f6",
          200: "#aecbed",
          300: "#7eaadf",
          400: "#4d84cd",
          500: "#2c63b0",
          600: "#1f4c8c", // logo blue
          700: "#1b3e72",
          800: "#193456",
          900: "#152a44",
        },
        gold: {
          400: "#e0b873",
          500: "#cfa052",
          600: "#b98838",
        },
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(16, 23, 38, 0.35)",
        card: "0 10px 40px -15px rgba(16, 23, 38, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "soft-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "soft-zoom": "soft-zoom 12s ease-out forwards",
      },
    },
  },
  plugins: [],
};

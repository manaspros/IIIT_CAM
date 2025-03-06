/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f8fbff",
          100: "#e3f2ff",
          200: "#cce6ff",
          300: "#b3daff",
          400: "#99ceff",
          500: "#80c2ff", // Lighter primary color
          600: "#66b5ff",
          700: "#4da8ff",
          800: "#339bff",
          900: "#1a8eff",
        },
        secondary: {
          50: "#f5fdff",
          100: "#e8fbff",
          200: "#d1f7ff",
          300: "#baf3ff",
          400: "#a3efff",
          500: "#8ceaff", // Lighter secondary color
          600: "#75e6ff",
          700: "#5ee2ff",
          800: "#47deff",
          900: "#30d9ff",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
        display: ["Libre Franklin", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-light": "pulse-light 4s infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-light": {
          "0%, 100%": { opacity: 0.7 },
          "50%": { opacity: 1 },
        },
      },
      screens: {
        "7xl": "1440px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  darkMode: "class", // Enable dark mode with class strategy
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef5ff",
          100: "#d9e8ff",
          200: "#bcd7ff",
          300: "#8bbeff",
          400: "#559aff",
          500: "#4671AF", // Main primary color
          600: "#3357a1",
          700: "#2d4484",
          800: "#293b6d",
          900: "#27355b",
        },
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#b9e6fe",
          300: "#7cd3fd",
          400: "#36bffa",
          500: "#0ba5ec",
          600: "#0284c7",
          700: "#036ba1",
          800: "#075985",
          900: "#0c4a6e",
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

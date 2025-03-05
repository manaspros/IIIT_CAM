// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enables dark mode via a 'dark' class
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      // You can add custom colors or other theme extensions here
    },
  },
  plugins: [
    // You can add plugins here if needed (e.g., forms, typography, etc.)
  ],
};

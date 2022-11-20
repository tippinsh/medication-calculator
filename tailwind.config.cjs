/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purpleBlue: "#ECECFB",
        backgroundFull: "#EBF3FB",
        purpley: "#8F5AFF",
        navyish: "#171E35",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Merriweather", "monospace"],
      },
    },
  },
  plugins: [],
};

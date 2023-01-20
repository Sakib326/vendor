/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#AC224D",
        secondary: "#FBAD18",
        tertiary: "#FAF2F5",
        grey: "#808291",
        black: "#181B31",
        white: "#ffffff",
      },
    },
    fontFamily: {
      english: ["Rubik", "sans-serif"],
      bangla: ["Baloo Da 2", "sans-serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

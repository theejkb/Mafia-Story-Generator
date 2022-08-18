// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      blue: colors.blue,
      white: colors.white,
      gray: colors.neutral,
      indigo: colors.indigo,
      red: {
        500: "#d7350d",
        400: "#7a1800"
      },
      yellow: {
        100: "#ffe9d7",
        200: "#ffd3af",
        300: "#ffbc86",
        400: "#ffa65e",
        500: "#ff9036",
        600: "#cc732b",
        700: "#995620",
        800: "#663a16",
        900: "#331d0b",
      },
      green: colors.green,
      //CUSTOM COLORS
      //https://www.tailwindshades.com/
      //or crtl g + ctrl k on hexa value (#007ce6)

      primary: {
        100: "#d1d2d4",
        200: "#a4a5a9",
        300: "#76777f",
        400: "#494a54",
        500: "#1b1d29",
        600: "#161721",
        700: "#101119",
        800: "#0b0c10",
        900: "#050608",
      },
    },
    fontFamily: {
      body: ["Bebas Neue"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

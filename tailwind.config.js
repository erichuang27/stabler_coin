const fontFammily = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ["Red Hat Display", "sans-serif"],
    },
    extend: {
      height: {
        slide: "45rem",
        nav: "6rem",
        footer: "20rem",
      },
      width: {},
      colors: {
        primary: colors.indigo,
        secondary: colors.white,
        accent: colors.purple,
      },
    },
  },
  plugins: [],
};

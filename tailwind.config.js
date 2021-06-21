const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter var,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji",
      },
      colors: {
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
      },
      spacing: {
        18: "4.5rem",
      },
      translate: {
        "[-150px]": "-150px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",
        exs: "340px",
      },
      colors: {
        "main-bg": "#030307",
        light: "#2B2C30",
        primary: "#C7B3FC",
        "login-input": "#372439",
        all: "#C381FC",
        toggle: "#000000",
        dark: "#000000",
        wht: "#dddddd",
        gry: "#a6a6a6",
        blu: "#4f46e5",

        dash: "#2B2C30",
        "dashboard-bg": "#090914",
      },
      backgroundImage: {
        map: "../images/map.svg",
      },
      fontFamily: {
        codePro: "Code Pro regular",
        codeProLight: "Code Pro light",
        codeProBold: "Code Pro bold",
        Montserrat: "Montserrat",
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
  fontDisplay: {},
};

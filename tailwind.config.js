/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C359E",
        body: "#E2DFD0",
        input_bg: "#ced0ca",
        list: "#9AC8CD",
      },
      fontFamily: {
        Geologica: "Geologica",
        signika: "Signika",
        poppins: "Poppins",
        BriemHand: "Briem Hand",
        Ysabeau: "Ysabeau",
        ubuntu: "Ubuntu",
      },
    },
  },
  plugins: [],
};


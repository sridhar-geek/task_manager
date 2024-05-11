/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C359E",
        body: "#E2DFD0",
        input_bg: "#ced0ca",
        important: "#D80032",
        moderate: "#FDDE55",
        low: "#0EA293",
        completed: "",
        list: "#C0D6E8",
      },
      fontFamily: {
        Geologica: "Geologica",
        signika: "Signika",
        poppins: "Poppins",
        BriemHand: "Briem Hand",
        Ysabeau: "Ysabeau",
        ubuntu: "Ubuntu",
        Roboto: 'Roboto',
      },
    },
  },
  plugins: [],
};


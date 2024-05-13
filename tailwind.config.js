/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0C359E",
        body: "#F0F8FF",
        input_bg: "#ced0ca",
        important: "#FF6347",
        moderate: "#FFD700",
        low: "#32CD32",
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
        Roboto: "Roboto",
      },
    },
  },
  plugins: [],
};


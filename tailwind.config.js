/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    screens: {
      sm: "390px",
      md: "744px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {},
      spacing: {
        4.5: "18px",
      },

      fontFamily: {
        tnr: ["Times", "Times New Roman", "serif"],
      },
      colors: {
        primary: "#FFC800",
        secondary: "#F6F6F6",

        listBar: "#F8F5F5",
        borderColor: "#DADADA",
        mygrey: "#9C9C9C",
        lightgreen: "rgb(67, 160, 71)", //delivery status
        lightorange: "rgb(255, 130, 54)", //delivery status
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        secondary: "#F6F6F6",
        lightblack: "#9C9C9C",
      },
      width: {
        88: "352px", //purchase history mobile title bar
        100: "400px", //purchase history
        167: "668px", //purchase history tab
        268: "1072px", //purchase history
        285: "1140px",
      },
      backgroundColor: {
        lightgreen: "rgba(67, 160, 71, 0.12)", //delivery status
        lightorange: "rgba(255, 130, 54, 0.12)", //delivery status
      },
      boxShadow: {
        myshadow: "0 1px 1px 2px rgba(0, 0, 0, 0.1)",
      },
      fontSize: {
        toosm: "12px",
      },
      gridTemplateColumns: {
        dashboard: "repeat(3, 210px)",
      },
    },
  },
  plugins: [],
};

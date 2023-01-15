/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "390px",
      md: "744px",
      lg: "1320px",
      xl: "1620px",
    },
    
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      fontFamily: {
        'tnr': ["Times", 'Times New Roman', "serif"],
      },
      colors: {
        primary: "#DE146A",
        listBar: "#F8F5F5",
        borderColor: '#DADADA',
        mygrey: "#9C9C9C",
        lightgreen: "rgb(67, 160, 71)", //delivery status
        lightorange: "rgb(255, 130, 54)",  //delivery status
      },
      borderWidth:{
        "1": "1px",
        secondary: "#F6F6F6",
      },
      width:{
        268: "1072px", //purchase history
        167: "668px", //purchase history tab
        100: "400px", //purchase history
      },
      backgroundColor:{
        lightgreen: "rgba(67, 160, 71, 0.12)",  //delivery status
        lightorange: "rgba(255, 130, 54, 0.12)",  //delivery status
      }
    },
  },
  plugins: [],
};

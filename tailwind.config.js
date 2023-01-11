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
      lg: "1200px",
      xl: "1600px",
    },
    
    container: {
      center: true,
      // padding: "1rem",
    },
    extend: {
      fontFamily: {
        'tnr': ["Times", 'Times New Roman', "serif"],
      },
      colors: {
        primary: "#DE146A",
        listBar: "#F8F5F5",
        borderColor: '#DADADA',
        mygrey: "#9C9C9C"
      },
      borderWidth:{
        "1": "1px"
      },
    },
  },
  plugins: [],
};

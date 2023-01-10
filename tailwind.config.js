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
      padding: "2rem",
    },
    extend: {
      fontFamily: {},
      colors: {
        primary: "#DE146A",
      },
    },
  },
  plugins: [],
};

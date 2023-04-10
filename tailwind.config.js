/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#000000",
          100: "#232323",
          150: "#707070",
          200: "#191C25",
          300: "#2B7AF6",
          400: "#191C25",
          450: "#9B9CA3",
          500: "#838588",
          550: "#373B3F",
          600: "#374151",
          650: "#9CA3AF",
        },
        secondary: {
          50: "#BD2344",
          100: "#F92552",
          150: "#D41105",
          200: "#BABABA",
        },
      },
      fontFamily: {
        Poppins: ["Poppins"],
        Rajdhani: ["Rajdhani"],
      },
    },
  },
  plugins: [],
};

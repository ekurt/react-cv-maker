/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#E1D8CF",
        dark: "#373740",
        primary: "#43434C",
      },
    },
  },
  plugins: [],
};

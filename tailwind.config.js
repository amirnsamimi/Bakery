/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#154160",
        secondary: "#ffb582",
        blueButton: "#bfd6e7",
        fontColor: "#292d32",
        grayFont: "#9b9999",
        line: "#c2c2c2",
        white: "#ffffff",
        hover: "#8499a7",
        whiteSecondary: "#fdfdfd",
        lightGray: "#fafafa",
        success: "#038c00",
        error: "#D03F00",
        boxShadow: "#62626233",
      },
    },
  },
  plugins: [],
};

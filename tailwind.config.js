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
      boxShadow: {
        boxPrimary:
          "0px 4px 9px 0px #6c6c6c1a, 0px 17px 17px 0px #6c6c6c17,0px 38px 23px 0px #6c6c6c0d, 0px 67px 27px 0px #6c6c6c03,0px 105px 29px 0px #6c6c6c00",
      },
    },
  },
  plugins: [],
};

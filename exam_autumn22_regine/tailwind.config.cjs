/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../exam_autumn22_regine/*.html", "../exam_autumn22_regine/html/*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1449px"
    },
    extend: {
      colors: {
        brightRed: "#8B4044",
        darkRed: "#521920",
        brightBlue: "#6C9DC5",
        darkBlue: "#293F57",
        body: "#E6E6E6",
        main: "#FAFAFA",
        white: "rgb(250, 250, 250)"
      }
    },
  },
  plugins: [],
}

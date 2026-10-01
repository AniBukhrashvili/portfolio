/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "72rem",
        md: "72rem",
        lg: "72rem",
        xl: "82rem",
        "2xl": "82rem",
      },
    },
    extend: {
      colors: {
        page: "rgb(var(--page) / <alpha-value>)",
        ink: "rgb(var(--ink) / <alpha-value>)",
        accent: "#8DA3C7",
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "sans-serif"],
      },
      maxWidth: {
        "9xl": "96rem",
      },
    },
  },
  plugins: [],
};

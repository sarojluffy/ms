/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellowsaroj: "#FFB900",
        bluesaroj: "#005CA5",
      },
      screens: {
        lg: "858px",
        xl: "1398px",
      },
    },
  },
  plugins: [],
};

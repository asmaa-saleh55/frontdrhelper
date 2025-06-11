/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        hoverColor: "#3b7c7f",
        brightColor: "#dd8036",
        backgroundColor: "#FFFF"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColors: {
      
      },
      colors:{
        primary:"#f42c37",
        secondary:"#f42c37",
        brandYellow:"#fdc62e",
        brandGreen:"#2dcc6f",
        brandBlue:"#1476f4",
        brandWhite:"#eeeeee",
        dark:"#111111",
      },
      container: {
      padding: {
        DEFAULT: '1rem',
        sm: '3rem',
        md:'1rem',
      }
      },
      
    },
  },
  plugins: [],
}
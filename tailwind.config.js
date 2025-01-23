/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{jsx,tsx,vue}", 
  ],
  theme: {
    screens: {
      '2xl': '1920px'
    },
    extend: {
      fontFamily: {
        'poppins': 'poppins'
      },
      backgroundImage:{
        'green-00-cff': 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%)'
      },
      colors: {
        'red-070':'rgba(86, 44, 44, 0.70)',
        'black-020': 'rgba(238, 238, 238, 0.20)',
        'white-030': 'rgba(255, 255, 255, 0.30)',
        'red-080': 'rgba(86, 44, 44, 0.80)',
        'brown-030': 'rgba(86, 44, 44, 0.30)',
        'red-050': 'rgba(242, 84, 45, 0.50)',
        "red-060": "rgba(242, 84, 45, 0.60)",
        "gray-010": "rgba(102, 102, 102, 0.10)",
        "red-060": "rgba(86, 44, 44, 0.60)",
        "red-050": "rgba(86, 44, 44, 0.50)",
        "white-060": "rgba(255, 255, 255, 0.60)",
        "white-060": "rgba(255, 255, 255, 0.60)"
      },
      boxShadow: {
        "red-010": "0px 0px 30px 0px rgba(242, 84, 45, 0.10)"
      },
      screens: {
        'xl': { max: "1194px"},
        'lg': { max: "834px"},
        'md': { max: "767px"},
        'sm': { max: "639px" },
      },
    },
  },
  plugins: [],
}


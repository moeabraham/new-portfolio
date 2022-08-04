
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'xs': '300px',
      ...defaultTheme.screens,
    },
  variants: {},
  plugins: [],


    // extend: {
      

      
    // },
  },
  // plugins: [],
}

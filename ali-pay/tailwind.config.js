/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}' , './components/**/*.{js,jsx}' ],
  theme: {
    extend: {
      colors:{
        'primary-green':'#11453B'
      },
      screns:{
        md:'870px',

      }
    },
  },
  plugins: [],
}
 

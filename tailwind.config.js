/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'app-black':'#231F20',
        'app-dark':'#292426',
        'app-lighter-dark':'#312B2D',
        'app-gray':'#949393',
        'app-yellow':'#F8C542',
        'app-red':'#761638',
        'app-white':'#C7C7C7'
      },
      fontFamily:{
        'montserrat':['Montserrat']
      }
    },
  },
  plugins: [],
}
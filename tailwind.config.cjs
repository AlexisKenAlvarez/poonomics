/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        header: ['Rajdhani']
      },
      colors: {
        hero: '#1D1862',
        sauce: '#E75F69',
        mypink: '#FC5BFF',
        mygrey: '#979797'
      },
      boxShadow: {
        hover: '0px 6px 0px 0px rgba(255,255,255,1)'
      }
    },
  },
  plugins: [],
}

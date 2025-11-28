/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,css}", 
    "./dist/**/*.html",
  ],
  theme: {
    extend: {
      fontSize:{
        base: '0.875rem',
      }
    },
  },
  plugins: [],
}
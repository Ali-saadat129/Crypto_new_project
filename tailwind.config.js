/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      active : {
        color:'#FF7551'

      },
      fontFamily: {
        gabarito: ['gabarito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
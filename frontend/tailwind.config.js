/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arial-black': ['"Arial Black"', 'Arial', 'sans-serif'],
        'trebuchet': ['"Trebuchet MS"', 'Helvetica', 'sans-serif'],
        'lucida': ['"Lucida Sans Unicode"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
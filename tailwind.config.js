/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          default: '#B58E2B',
          light: '#C9A64A',
        }
      },
    },
  },
  plugins: [],
}
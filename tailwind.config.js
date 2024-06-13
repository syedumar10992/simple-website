/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgb(50, 50, 50)',
        'body-gray': 'rgb(30, 30, 30)',
      },
    },
  },
  plugins: [],
}
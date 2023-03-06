/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        'sm': '650px',
        'md': '720px',
      }
    },
    extend: {
      colors: {
        "primary": '#26CBB5'
      }
    },
  },
  plugins: [],
}


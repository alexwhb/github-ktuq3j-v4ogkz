/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        pinblue: {
          500: '#638CA6',
        },
        pingray: {
          100: '#f0f0f0',
          400: '#9A9B9B',
          500: '#808080',
          600: '#707070',
          900: '#363636',
        },
      },
    },
  },
  plugins: [],
};

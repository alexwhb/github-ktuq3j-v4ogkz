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
          100: '#F0F0F0',
          500: '#808080',
          900: '#363636',
        },
      },
    },
  },
  plugins: [],
};

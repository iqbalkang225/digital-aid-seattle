/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        orangish: '#d36037',
        reddish: '#a03345',
        whitish: '#eeeeee',
        blackish: '#2a130b',
        grayish: '#bbbbbb',
      },
    },
  },
  plugins: [],
};

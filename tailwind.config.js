/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['./client/src/**/*.{html,jsx,js}'],
  theme: {
    textColor: {
      red: '#ff0000',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [require('daisyui')],
});

/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['./client/src/**/*.{html,jsx,js}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
});

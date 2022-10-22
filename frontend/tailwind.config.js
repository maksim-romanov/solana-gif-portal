/** @type {import('tailwindcss').Config} */

module.exports = {
  // darkMode: 'class',

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
      },
    },
  },

  plugins: [require('tailwindcss-animate')],
};

/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        leap: {
          gray: {
            300: '#CCCCCC',
            400: '#999999',
            700: '#777777',
          },
          blue: {
            400: '#7695EC',
            500: '#456FE5',
            600: '#1D4DD4',
          },
          red: {
            500: '#FF5151',
            600: '#FF1919',
            700: '#E00000'
          },
          green: {
            500: '#47B960',
            600: '#3D9153',
            700: '#2F7642',

          }
        }
      },
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans]
      },
      fontSize: {
        'lg': ['1.375rem', { lineHeight: '1.75rem' }]
      },
    },
  },
  plugins: [],
}

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
          overlay: 'rgba(119, 119, 119, 0.8)',
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
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
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

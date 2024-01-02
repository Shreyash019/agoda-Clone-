/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': { 'min': '300px', 'max': '779px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': { 'min': '780px', 'max': '1199px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': { 'min': '1199px', 'max': '1600px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald' ],
      'body': ['Open Sans'],
    },
    colors: {
      // Colors
      'white': '#ffffff',
      'black': '#000000',
      'black-gray': '#262626',
      'black-light': '#404040',
      'navy': '#000080',
      'red': '#ff0000',
      'blue': '#00bfff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray': '#8492a6', 
      'grey-light': '#cccccc',
      'grey-dark': '#404040',

      'btn-sky-blue': '#4d94ff',
      'btn-sky-blue-bg': '#e6f0ff',
      'nav-bot-bg': '#ffeee6',
      'nav-bot-btn': '#87b3fb',
      'hh-book': '#f8f7f9',
    },
    fontFamily: {},
    extend: {}
  },
  plugins: [],
}
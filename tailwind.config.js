/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  rippleui: {
    mode: 'jit',
    defaultStyle: false,
    // removeThemes: ['dark', 'light'],
    themes: [
      {
        themeName: 'light',
        colorScheme: 'light',
        colors: {
          primary: '#25a0e2',
          backgroundPrimary: '#964643',
          error: '#f06548',
        },
      },
      {
        themeName: 'dark',
        colorScheme: 'dark',
        colors: {
          primary: '#1f88c0',
          backgroundPrimary: '#1a1a1a',
          error: '#f06548',
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require('rippleui')],
};

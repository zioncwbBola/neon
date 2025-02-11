/* eslint-disable @typescript-eslint/no-require-imports */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        futuristic: ['Orbitron', 'sans-serif'],
      },
      colors: {
        primary: '#00FF00',
        background: '#000000',
      },
    },
  },
  plugins: [require('daisyui')],
};

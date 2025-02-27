/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        styrene: ['"Styrene A Web"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
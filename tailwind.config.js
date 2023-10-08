/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-primary': '#F1A501',
        'my-secondary': '#DF6951',
        'my-purple': '#6246E5',
        'my-heading': '#181E4B',
        'my-paragraph': '#5E6282',
      },
      fontFamily: {
        sans: ['Poppins', 'sans'],
        volkhov: ['volkhov'],
      },
    },
  },
  plugins: [],
}

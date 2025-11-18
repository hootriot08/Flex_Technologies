/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#77E040',
          DEFAULT: '#34A010',
          dark: '#2A800D',
        },
        accent: {
          DEFAULT: '#FFFF00',
          dark: '#E6E600',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


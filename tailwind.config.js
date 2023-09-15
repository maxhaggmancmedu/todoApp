/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#9AC4F8',
      'purple': '#3D348B',
      'pink': '#E36588'
    },
    extend: {
      spacing: {
        '40rem': '40rem',
        '32rem': '32rem',
      },
      maxWidth: {
        '16rem': '16rem'
      }
    },
  },
  plugins: [],
}


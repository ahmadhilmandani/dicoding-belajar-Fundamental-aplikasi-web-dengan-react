/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cust-white': '#FAFAFA',
        'cust-black': '#212529',
        'cust-gray': '#EBEBEB',
        'cust-light-gray': '#F4F4F4',
        'cust-orange': '#FFD4A9',
        'cust-blue': '#D1EAED',
        'cust-pink': '#FFDADA',
        'cust-yellow': '#FDF2B3',
      }
    },
  },
  plugins: [],
}


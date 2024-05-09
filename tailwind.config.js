/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary: '#2B6F3E',
        secondary: '#2B6F3E',
        textColor: '#959595',
      }
    },
  },
  plugins: [],
};

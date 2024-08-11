import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        blackMango: ['"Black Mango"', 'sans-serif'],
      },

      colors: {
        ignite: {
          white: '#f8f7f4',
          cream: '#ddc181',
          mid : '#bd9479',
          blue: '#d2e3e4',
          teal: '#dfe8de',
          brown: '#745e4d',
          dark: '#5b4f47',
          black: '#020404',
        },
      },
    },
  },
  plugins: [forms],
};

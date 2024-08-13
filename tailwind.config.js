import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'great-vibes': ['Great Vibes', 'serif'],
      },

      colors: {
        ignite: {
          brown: "#bd9479",
        },
      },
    },
  },
  plugins: [forms],
};

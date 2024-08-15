import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "great-vibes": ["Great Vibes", "serif"],
      },
      keyframes: {
        'bounce-once': {
          '0%, 100%': { transform: 'translateY(0)' },
          '20%': { transform: 'translateY(-12px)' },
          '40%': { transform: 'translateY(0)' },
          '60%': { transform: 'translateY(-4px)' },
          '80%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'bounce-once': 'bounce-once 1.5s cubic-bezier(0.25, 1, 0.5, 1) 1',
      },
      colors: {
        ignite: {
          cream: "#ddc1a7",
          brown: "#bd9479",
          dark: "#745e4d",
        },
      },
    },
  },
  plugins: [forms],
};

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
          '15%': { transform: 'translateY(-16px)' },
          '30%': { transform: 'translateY(0)' },
          '45%': { transform: 'translateY(-6px)' },
          '60%': { transform: 'translateY(0)' },
          '75%': { transform: 'translateY(-1px)' },
          '90%': { transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(-10%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'slide-up': {
          '0%': { transform: 'translateY(10%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        'bounce-once': 'bounce-once 1s cubic-bezier(0.25, 1, 0.5, 1) 1',
        'slide-in': 'slide-in 2s ease-out forwards',
        'slide-up': 'slide-up 2s ease-out forwards',
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

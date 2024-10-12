const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sf: "var(--font-sfpro)"
      },
      keyframes: {
        fadeIn : {
          "0%" : { opacity: 0, scale: '90%' },
          "100%" : { opacity: 100, scale: '100%' }
        },
      },
      animation: {
        fadeIn : "fadeIn 2s ease-out"
      }
    },
  },
  plugins: [],
};

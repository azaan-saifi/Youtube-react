/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'media500': '500px',
      'media780': '780px',
      'media700': '700px',
    },
    extend: {},
  },
  plugins: [],
};


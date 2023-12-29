/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        'dmsans': ['DMSans', 'sans-serif'],
        'dmsanslight': ['DMSansLight', 'sans-serif'],
        'dmsansmedium': ['DMSansMedium', 'sans-serif'],
        'dmsansbold': ['DMSansBold', 'sans-serif'],
        'opensans': ['OpenSans', 'sans-serif'],
        'opensanslight': ['OpenSansLight', 'sans-serif'],
        'opensansmedium': ['OpenSansMedium', 'sans-serif'],
        'opensansbold': ['OpenSansBold', 'sans-serif'],
      },
    },
  },

  plugins: [
    require("tailwindcss-animate"),
  ],
}
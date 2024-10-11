/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      "desktop": "1000px",
      "mini": "400px",
      "mobile": "750px"
    },
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        mc: 'max-content',
      },
      spacing: {
        88: '21rem',
      },
      borderRadius: {
        '40xl': '20rem',
      },
      scale: {
        200: '2',
      },
    },
  },
  plugins: [],
}

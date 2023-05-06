/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ffffff',
        'secondary': "#7e57c2"
      },
      fontFamily: {
        'primary': ['Playfair Display', 'serif'],
        'secondary': ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [],
}


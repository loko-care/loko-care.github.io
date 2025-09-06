/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'loko-green': '#174B3A',
        'loko-ink': '#0F1C18', 
        'loko-muted': '#6B7C74',
        'loko-beige': '#EEDFD4',
      },
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

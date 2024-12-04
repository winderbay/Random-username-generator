export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A84FF',
        secondary: '#30363D',
        background: '#F5F5F7'
      },
      fontFamily: {
        sans: ['SF Pro Display', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}
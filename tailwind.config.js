/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: '#0F172A',
        secondary: '#1E293B',
        accent: '#C9A96E',
        light: '#F8FAFC',
        text: '#0F172A',
        muted: '#475569',
      },
    },
  },
  plugins: [],
}

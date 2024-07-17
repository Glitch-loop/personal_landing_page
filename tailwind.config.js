/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'project-color-red': '#E74C3C',
      'project-color-orange': '#E67E22',
      'project-color-yellow': '#F1C40F',
      'project-color-green': '#2ECC71',
      'project-color-blue': '#3498DB',
      'base-color': '#D9D9D9',
      'background-color': '#121212'
    },
    extend: {},
  },
  plugins: [],
}


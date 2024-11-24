/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust the path based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors for light and dark mode
        darkBackground: '#1a202c', // Dark background color
        darkText: '#f7fafc', // Light text color for dark mode
        lightBackground: '#ffffff', // Light background color
        lightText: '#2d3748', // Dark text color for light mode
      },
    },
  },
  plugins: [],
}
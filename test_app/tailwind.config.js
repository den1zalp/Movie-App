/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}",'./components/**/*.{html,js,ts,jsx,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#030014',
        secondary: '#FF0000',
        accent: '#AB8BFF',
        light: {
          100: '#D6C6FF',
          200: '#A8B5DB',
          300: '#9CA4AB'
        },
        dark: {
          100: '#030014',
          200: '#1A1A2E',
        
        }
    },
  },
  plugins: [],
}}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'sm': '500px',   // Small screens (e.g. smartphones)
        'md': '768px',   // Medium screens (e.g. tablets)
        'lg': '1024px',  // Large screens (e.g. laptops)
      },
    },
  },
  plugins: [],
}
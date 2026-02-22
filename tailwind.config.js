/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'groth-white': '#fdfdfd',
        'groth-black': '#0a0a0a',
        'groth-gray': '#e5e5e5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // High-end clean look
        mono: ['Space Mono', 'monospace'], // Technical/Data look
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
  colors : {
    pastelGreen: '#b8debd',
    mediumGreen: '#77a07c',
    grayishGreen: '#69716a',
    grayishBlue: '#E8F0F7'
  }
    },
  },
  plugins: [require("daisyui")],
}

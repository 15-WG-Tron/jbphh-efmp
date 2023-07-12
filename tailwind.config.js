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
  daisyui: {
    themes: [
        {
          mytheme: {
          "primary": "#57bac1",
          "secondary": "#b8debd",
          "accent": "#b7ef73",
          "neutral": "#23252e",
          "base-100": "#ffffff",
          "info": "#259be4",
          "success": "#22bf9f",
          "warning": "#9d7f06",
          "error": "#f46052",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}

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
          "primary": "#0065B2",
          "secondary": "#c3d6e4",
          "accent": "#737268",
          "neutral": "#376f9A",
          "base-100": "#fff",
          "info": "#259be4",
          "success": "#22bf9f",
          "warning": "#9d7f06",
          "error": "#f46052"          },
        },
      ],
    },
  plugins: [require("daisyui")],
}

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary-500": "#635FC7",
      "primary-300": "#A8A4FF",
      "secondary-500": "#828FA3",
      "secondary-300": "#E4EBFA",
      "secondary-100": "#F4F7FD",
      "red-500": "#EA5555",
      "red-300": "#FF9898",
      "black": "#000112",
      "gray-700": "#20212C",
      "gray-500": "#2B2C37",
      "gray-300": "#3E3F4E",
      "white": "#ffffff",
    },
    fontFamily: {
      jakarta: ["Plus Jakarta Sans", "sans-serif"]
    },
    fontSize: {
      'h1': ['24px', {
        lineHeight: '30px',
        fontWeight: '700',
      }],
      'h2': ['18px', {
        lineHeight: '23px',
        fontWeight: '700',
      }],
      'h3': ['15px', {
        lineHeight: '19px',
        fontWeight: '700',
      }],
      'h4': ['12px', {
        lineHeight: '15px',
        fontWeight: '700',
        letterSpacing: '2.4px',
      }],
      'p1': ['13px', {
        lineHeight: '23px',
        fontWeight: '500',
      }],
      'p2': ['12px', {
        lineHeight: '15px',
        fontWeight: '700',
      }],
    },
    screens: {
      xs: "425px",
      sm: "768px",
      md: "1440px",
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


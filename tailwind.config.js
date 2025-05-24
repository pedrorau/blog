/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./**/*.html",
      "./**/*.js"
    ],
    darkMode: 'class',
    theme: {
      extend: {},
    },
    plugins: [],
    safelist: [
      'bg-gray-800',
      'text-white',
      'rounded-full',
      'hover:bg-green-600',
      'transition',
      'duration-200'
    ]
  }
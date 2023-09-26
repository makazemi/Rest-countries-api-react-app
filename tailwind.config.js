/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
     "./index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{  
              darkBlue: "hsl(209, 23%, 22%)",
              veryDarkBlueBg: "hsl(207, 26%, 17%)",
              veryDarkBlue: "hsl(200, 15%, 8%)",
              darkGray:"hsl(0, 0%, 52%)",
              veryLightGray: "hsl(0, 0%, 98%)",
      }
    },
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}


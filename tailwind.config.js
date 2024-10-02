/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif'
      },
      
      backgroundImage: {
        "cta-mobile": "url('./bg-cta-mobile.png')",
        "cta-desktop": "url('./bg-cta-desktop.png')"
      },
  
      colors: {
        text1: 'hsl(196, 45%, 10%)',
        text2: 'hsl(196, 45%, 98%)',
        lightBlue1: 'hsl(195, 100%, 45%)',
        lightBlue2: 'hsl(194, 61%, 85%)',
        grayishBlue1: 'hsl(195, 45%, 45%)',
        grayishBlue2: 'hsl(194, 36%, 91%)',
        gray: 'hsl(194, 36%, 91%)',
        green: 'hsl(86, 55%, 85%)',
        error: 'hsl(0, 100%, 75%)',
        success: 'hsl(95, 100%, 75%)'
      }
    }

  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      maxWidth:{
        container:"1400px",
      },
      fontFamily:{
        poppins:["Poppins","sans-sarif"],
        dm:["DM Sans","sans-sarif"],
      },
      colors: {
        'lightGray': "#a7a7a7",
      },
    },
  },
  plugins: [],
}


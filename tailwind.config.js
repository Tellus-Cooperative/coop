/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
       mygrey: '#979797',
       green:'#71C666',
       lightgrey: "",
       borderColor:'#d9d9d9',
       blueColor: '#2E4153'
      }
    },
  },
  plugins: [],
}


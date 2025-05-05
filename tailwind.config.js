/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bigShoulders: ['"Big Shoulders Inline"', '"Pacifico"' , 'cursive'],
        brandName: ['"Pacifico"' , 'cursive'],
      },
    },
  },
  plugins: [],
}
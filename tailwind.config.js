/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'aboutss': "url('/src/assets/hero-image.jpg')",

    },
    fontFamily: {
      'sans': ['Poppins', 'sans-serif']
    }
  }
}
}

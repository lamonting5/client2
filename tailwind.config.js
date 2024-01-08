/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Black':'#1E2832',
        'primaryBG':'#1e28320d'
      },
      backgroundImage: {
        heroBg: "url(./assets/home/hero03.png)",
        "quiz-bg": "url(./assets/home/quiz_bg.png)",
        banner02: "url(./assets/home/sapramat.png)"
      },
    },
  },
  plugins: [],
}
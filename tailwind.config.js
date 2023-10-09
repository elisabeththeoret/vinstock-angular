/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,css}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'lato': 'var(--font--lato)',
      'el_messiri': 'var(--font--el_messiri)',
      'brand': ['Cinzel Decorative'],
    },
    colors: {
      'white': 'var(--white)',
      'lightgray': 'var(--lightgray)',
      'black': 'var(--black)',
      'darkred': 'var(--darkred)',
      'burgundy': 'var(--burgundy)',
      'red': 'var(--red)',
      'pink': 'var(--pink)',
      'beige': 'var(--beige)',
      'green': 'var(--green)',
      'bg_filter': 'rgba(0, 0, 0, 0.7)',
    },
    boxShadow: {
      nav: '0 -1px 6px 0 rgba(0, 0, 0, 0.1), 0 -1px 5px 0 rgba(0, 0, 0, 0.06)',
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
}

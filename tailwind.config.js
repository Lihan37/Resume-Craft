/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-primary": "#3b82f6",
        "c-primary-light": "#4a8fff",
        "c-dark": "#262626",
        "c-dark-light": "#525252",
      },
      fontFamily: {
        "f-mono": "Sometype Mono",
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

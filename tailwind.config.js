/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-bg": "#fffef9",
        "c-primary": "#fbbf24",
        "c-primary-light": "#4a8fff",
        "c-dark": "#010101",
        "c-dark-light": "#525252",
      },
      fontFamily: {
        "f-mono": "Sometype Mono",
        // sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

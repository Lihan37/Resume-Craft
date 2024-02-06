/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-bg": "#ffff",
        // "c-bg": "#eff6ff40",
        "c-primary": "#3b82f6",
        "c-primary-light": "#60a5fa",
        "c-dark": "#172554",
        "c-dark-light": "#525252",
      },
      fontFamily: {
        "f-mono": "Mono",
        "f-poppins": "Poppins",
        "f-roboto": "Roboto",
        "f-inter": "Inter",
        // sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

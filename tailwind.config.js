/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-primary": "#",
        "c-secondary": "#",
        "c-success": "#",
        "c-dark": "#",
        "c-info": "#",
      },
      fontFamily: {
        "f-mono": "Sometype Mono",
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

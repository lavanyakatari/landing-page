/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables dark mode using a class
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // You can add more themes if needed
  },
};

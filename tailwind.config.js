// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(-100px) skewX(5deg) skewY(2deg)" },
          "100%": { transform: "translateX(100px) skewX(5deg) skewY(2deg)" },
        },
      },
      animation: {
        moveRight: "moveRight 2s infinite alternate ease-in-out",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        charcoal: "var(--charcoal)",
        silver: "var(--silver)",
        skyBlue: "var(--sky-blue)",
        teal: "var(--teal)",
      },
      screens: {
        xxl: { max: "1324px" },
        xl: { max: "1280px" },
        lg: { max: "1024px" },
        md: { max: "768px" },
        sm: { max: "640px" },
      },
      keyframes: {
        loading: {
          "0%": {
            height: "0px",
          },
          "100%": {
            height: "50px",
          },
        },
      },
      animation: {
        loading: "loading alternate-reverse infinite 1s",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

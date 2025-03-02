/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layout/**/*.liquid",
    "./templates/**/*.liquid",
    "./sections/**/*.liquid",
    "./snippets/**/*.liquid",
    "./assets/**/*.js",
    "./**/*.liquid"
  ],
  theme: {
    screens: {
      sm: "750px", // Custom small breakpoint
      md: "990px", // Custom medium breakpoint
      lg: "1024px", // Default Tailwind large
      xl: "1280px", // Default Tailwind extra large
      "2xl": "1536px", // Default Tailwind 2xl
    },
    extend: {
      fontFamily: {
        'chillax-medium': ["Chillax-Medium", "sans-serif"],
        'chubbo-medium': ["Chubbo-Medium", "sans-serif"],
        'playwrite-regular': ["PlaywriteAUTAS-Regular", "sans-serif"],
      },
      colors: {
        primary: "#EAFF19",
        secondary: "#1E953D",
      }
    },
  },
  plugins: [],
};

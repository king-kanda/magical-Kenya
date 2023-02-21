/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
    },

    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: { 
        50: "#f9fafb",
        100: "#f4f5f7",
        200: "#e5e7eb",
        300: "#d2d6dc",
      },
      orange : "#F58A07",
      green : {
        main:"#214F4B",
        light: "#248232",
        dark: "#274029",
      }
      
    },

    extend: {},
  },
  plugins: [],
}

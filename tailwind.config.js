/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "rgb(29 37 63)",
        secondary: "rgb(43, 54, 94)",
        "ebony-clay": {
          50: "#f4f4f5",
          100: "#e8e9ec",
          200: "#c7c9cf",
          300: "#a5a8b2",
          400: "#616679",
          500: "#1d253f",
          600: "#1a2139",
          700: "#161c2f",
          800: "#111626",
          900: "#0e121f",
        },
        "cloud-burst": {
          50: "#f4f5f7",
          100: "#eaebef",
          200: "#cacdd7",
          300: "#aaaebe",
          400: "#6a728e",
          500: "#2a355d",
          600: "#263054",
          700: "#202846",
          800: "#192038",
          900: "#151a2e",
        },
        "custom-blue": {
          50: "#f7faff",
          100: "#eff6fe",
          200: "#d7e8fd",
          300: "#bfdafc",
          400: "#8fbffa",
          500: "#5fa3f8",
          600: "#5693df",
          700: "#477aba",
          800: "#396295",
          900: "#2f507a",
        },
      },
    },
  },
  plugins: [],
};

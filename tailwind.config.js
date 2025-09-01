/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      colors: {
        lightBg: "#F7F9FC",
        darkBg: "#0E141B",
        darkSidebar: "#1C2530",
        lightSidebar: "#FFFFFF",
        coral: "#FF7A59",
        coralHover: "#FFD166",
        textLight: "#1C1C1C",
        textDark: "#EAEAEA",
        mutedGrayLight: "#4D5C6B",
        mutedGrayDark: "#9BA6B2",
      },
      backgroundImage: {
        "navbar-gradient": "linear-gradient(to right, #5EE7DF, #3A7BD5)",
      },
    },
  },
  plugins: [],
};

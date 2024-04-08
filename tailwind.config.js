/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateRows: {
        14: "repeat(14, minmax(0, 1fr))",
      },
      gridTemplateColumns: {
        14: "repeat(14, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    require("tailwindcss-react-aria-components"),
    require("tailwindcss-animate"),
    require("tailwindcss-animated"),
    require("@tailwindcss/container-queries"),
  ],
};

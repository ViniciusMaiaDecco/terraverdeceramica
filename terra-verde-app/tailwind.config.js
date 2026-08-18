/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./app/**/*.{js,jsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["--font-montserrat"],
        cormorantGaramond: ["--font-cormorant-garamond"],
        inter: ["--font-inter"],
        sFPro: ["--font-sf-pro"],
      },
    },
  },
  plugins: [],
};

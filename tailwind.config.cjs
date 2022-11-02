/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      aspectRatio: {
        "16/10": "16 / 10",
      },
      colors: {
        primaryClr: "#FF6B00",
        secondClr: "#BADEFF",
        thirdClr: "#FFEBB2",
        neutralClr: "#dee2e6",
        textDark: "#202020",
        textLight: "#333533",
      },
      screens: {
        md: "821px",
      },
    },
  },
  plugins: [],
};

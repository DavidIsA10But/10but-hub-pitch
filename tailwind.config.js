
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { accent: "#E63946", ink: "#1A1A1A" },
      fontFamily: { inter: ["var(--font-inter)"], poppins: ["var(--font-poppins)"] },
      boxShadow: { soft: "0 10px 30px rgba(230,57,70,0.15)" },
    },
  },
  plugins: [],
}

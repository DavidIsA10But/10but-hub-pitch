import type { Config } from 'tailwindcss'
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}","./components/**/*.{js,ts,jsx,tsx}","./lib/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ink:"#1A1A1A", accent:"#E63946" },
      fontFamily: { poppins:["Poppins","ui-sans-serif","system-ui"], inter:["Inter","ui-sans-serif","system-ui"] }
    }
  },
  plugins: []
}
export default config

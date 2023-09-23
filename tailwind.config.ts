import type { Config } from "tailwindcss"

const defaultTheme = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        "3xl": "-7px -7px 10px 0 rgba(255, 255, 255, 0.04), 7px 7px 10px 0 rgba(0, 0, 0, 0.8);",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(4deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      }
    },
    backgroundPosition: {
      "topBg": "center top 6rem"
    }
  },
  plugins: [],
}
export default config

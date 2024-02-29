import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primaryBG: "#F9EDE6",
        greenSide: "#8EC1A6",
        orangeSide: "#BF9181",
        aquaSide: "#88BCB9",
        graySide: "#353535",
        brownSide: "#BFA275",
        yellowSide: "#C2C36C",
        purpleSide: "#A588BB",
        blueSide: "#889DBC",
        brownBar: "#b78477",
        blueShiver: "#5E3FFF",
        yellowFrye: "#E9FF13",
        redBigman: "#F1565C",
      },
    },
  },
  plugins: [],
};
export default config;

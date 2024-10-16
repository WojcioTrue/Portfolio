import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        ml: '992px',
      },
      colors: {
        my: {
          black: 'rgb(15, 5, 29)',
          gray: 'rgb(123, 117, 131)',
          purple: 'rgb(116, 31, 245)',
          gradient1: 'rgb(38, 0, 252)',
          gradient2: 'rgb(255, 0, 234)',
        }
      } ,
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "header-my-default": "42px",
        "header-my-sm": "50px",
        "header-my-md": "60px",
        "header-my-xl": "68px",
        "header-my-2xl": "72px",
        "header-desc-default": "16px",
        "header-desc-sm-default": "24px",
      },
      boxShadow: {
        myshadow: '0 2px 5px -1px rgba(0,0,0,.08)',
      },
      screens: {
        sx: '400px',
        ml: '992px',
      },
      colors: {
        my: {
          navbarBackground: 'rgba(0,0,0,.10)',
          lightBackground: 'rgb(226 221 255)',
          white: 'rgb(250 250 250)',
          black: 'rgb(15, 5, 29)',
          gray: 'rgb(123, 117, 131)',
          lightGray: 'rgb(229 231 235)',
          purple: 'rgb(116, 31, 245)',
          gradient1: 'rgb(38, 0, 252)',
          gradient2: 'rgb(255, 0, 234)',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        header: '-4px',
        description: '-1px'
      }
    },
  },
  plugins: [],
};
export default config;

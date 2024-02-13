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
        "idkman" : "url('/public/images/Minifantasy_ForgottenPlainsMockup.png')",
      },
    },
    screens: {
      '2xl': {'max': '1700px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1605px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
// module.exports = {
//   content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: ["dark"],
//   },
// }

export default config;

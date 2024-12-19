import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/atom/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "radial-pulse": `
          radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 40%, rgba(0, 0, 0, 0) 70%)
        `,
      },
      keyframes: {
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          // "25%": { transform: "rotateY(90deg)" },
          // "50%": { transform: "rotateY(180deg)" },
          // "75%": { transform: "rotateY(270deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        slide: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        pulseBg: {
          "0%": {
            backgroundSize: "100% 100%",
          },
          "50%": {
            backgroundSize: "150% 150%",
          },
          "100%": {
            backgroundSize: "200% 200%",
          },
        },
      },
      animation: {
        slide: "slide 0.5s ease-in-out",
        flip: "flip 1s infinite",
        pulseBg: "pulseBg 4s infinite",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      letterSpacing: {
        "0.5": "0.5px",
        "-1": "-0.01em",
      },
      colors: {
        green: {
          default: "#15B79F",
          "100": "#CCFBEF",
        },
        red: "#F04438",
        background: "#FAF6EB",
        foreground: "var(--foreground)",
        "custom-border": "rgba(38, 35, 34, 0.2)",
        grey: "#667085",
        white: "#FFFFFF",
        textColor: {
          default: "#4D3F37",
          DEFAULT: "#4D3F37",
          lightBrown: "#4D3F37CC",
          yellow: "#FACF47",
          grey: "#667085",
          disable: "#8A94A6",
          red: "#F04438",
          green: {
            default: "#15B79F",
            "100": "#CCFBEF",
          },
        },
        margin: {
          auto: "auto",
        },
        width: {
          "fit-content": "fit-content",
        },
        brand: {
          primary: "#115E56", //using
          darkAqua: "#134E48", //using

          background: "#FAF6EB",
          darkBrown: "#262322",
          brown: "#4D3F37",
          yellow: "#FACF47",
          lightYellow: "#FFF0C8",
          orange: "#E17846",
          purple: "#937ADB",
          aqua: {
            DEFAULT: "#3DAB9E", // Original aqua color
            light: "rgba(61, 171, 158, 0.5)", // 50% opacity
            lighter: "rgba(61, 171, 158, 0.2)", // 20% opacity
            dark: "#2E857D", // Darker shade of aqua
          },
          darkYellow: "#A9873B",
          blue: "#67B3E1",
        },
      },
      fontWeight: {
        bold500: "500",
      },
      borderColor: {
        grey: "#DCDFE4",
        brown: "#4D3F3780",
        "dark-grey": "rgba(38, 35, 34, 0.2)",
        lightGrey: "#e5e7eb82", // Second shadow
      },
      boxShadow: {
        greyShade400: "0px 5px 22px 0px #0000000A", // First shadow
        greyShade300: "0px 0px 0px 1px #0000000F", // Second shadow
        // grey: "0px 2px 8px 0px #4D3F3705",
        // default: "0px 4px 8px 0px #4D3F370D",
      },
    },
  },
  plugins: [],
};
export default config;

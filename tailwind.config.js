/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Family: ["Family", "sans-serif"],
        "Satoshi-Bold": ["Satoshi-Bold", "sans-serif"],
        "Satoshi-Light": ["Satoshi-Light", "sans-serif"],
        "Satoshi-Med": ["Satoshi-Med", "sans-serif"],
      },
      colors: {
        black: {
          0: "#000000",
          100: "#1D1D1D",
        },
        yellow: {
          50: "#FFCD03",
        },
      },
      animation: {
        scroll1: "scroll1 60s linear infinite",
        scroll2: "scroll2 60s linear infinite",
        scrollY: "scrollY 40s linear infinite",
        scrollY1: "scrollY1 40s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        scroll1: {
          "0%": { transform: "translateX(calc(-250px * 9))" },
          "100%": { transform: "translateX(0)" },
        },
        scroll2: {
          "0%": { transform: "translateX(calc(-250px * 9))" },
          "100%": { transform: "translateX(-100%)" },
        },
        scrollY: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-100%)" }, // Adjust based on total height
        },
        scrollY1: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" }, // Adjust based on total height
        },
      },
    },
  },
  plugins: [],
};

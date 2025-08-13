/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e0aa22",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f8f6f3",
          foreground: "#030213",
        },
        accent: {
          DEFAULT: "#f8f6f3",
          foreground: "#030213",
        },
        background: "#ffffff",
        foreground: "#030213",
        card: "#ffffff",
        "card-foreground": "#030213",
        popover: "#ffffff",
        "popover-foreground": "#030213",
        muted: "#ececf0",
        "muted-foreground": "#717182",
        destructive: "#d4183d",
        "destructive-foreground": "#ffffff",
        border: "rgba(0, 0, 0, 0.1)",
        input: "transparent",
        "input-background": "#f3f3f5",
        ring: "#030213",
      },
      fontFamily: {
        "great-vibes": ["Great Vibes", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      borderRadius: {
        lg: "0.625rem",
      },
    },
  },
  plugins: [],
};

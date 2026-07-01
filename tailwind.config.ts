import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#071827",
        "bg-2": "#0A1D30",
        surface: "#10233A",
        "surface-2": "#132D48",
        accent: "#F5B82E",
        text: "#FFFFFF",
        "text-secondary": "#B8C4D2",
        "text-muted": "#7E8EA3",
        border: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["Inter", "Manrope", "system-ui", "sans-serif"],
      },
      boxShadow: {
        deep: "0 24px 80px rgba(0, 0, 0, 0.28)",
        glow: "0 16px 44px rgba(245, 184, 46, 0.22)",
      },
    },
  },
  plugins: [],
} satisfies Config;

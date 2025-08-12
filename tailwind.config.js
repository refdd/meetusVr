/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        bsPrimary: "#7A3AF9",
        bsPrimaryDark: "#5B2BD3",
        bsSecondary: "#E879F9",
        bsSuccess: "#22C55E",
        bsInfo: "#0F172A",
        bsWarning: "#F59E0B",
        bsXmas: "#003049",
        textPrimary: "#0F172A",
        textSecondary: "#6B7280",
        surface: "#FFFFFF",
        surfaceMuted: "#F4F2FF",
        divider: "#E5E7EB",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "#7A3AF9",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "figma-wash":
          "linear-gradient(115deg, #F0ECFF 0%, #E9D7FF 42%, #E6D8FF 100%)",
      },
      boxShadow: {
        cta: "0 8px 18px rgba(122,58,249,0.25), 0 2px 6px rgba(0,0,0,0.06)",
        card: "0 10px 30px rgba(16,24,40,0.06)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

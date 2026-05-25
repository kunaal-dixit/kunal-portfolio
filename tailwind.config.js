/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // Customize these to match your personal brand
        accent: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.accent.600"),
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": { textDecoration: "underline" },
            },
            "h1, h2, h3, h4": {
              fontFamily: [].concat(theme("fontFamily.serif")).join(", "),
              fontWeight: "700",
              letterSpacing: "-0.02em",
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              padding: "0.2em 0.4em",
              borderRadius: "0.25rem",
              fontWeight: "500",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            pre: {
              backgroundColor: theme("colors.gray.900"),
              color: theme("colors.gray.100"),
              padding: theme("spacing.4"),
              borderRadius: theme("borderRadius.lg"),
              overflowX: "auto",
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.gray.300"),
            "h1, h2, h3, h4": { color: theme("colors.white") },
            a: { color: theme("colors.accent.500") },
            code: {
              backgroundColor: theme("colors.gray.800"),
              color: theme("colors.gray.100"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

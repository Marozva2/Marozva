import type { Config } from "tailwindcss";
// import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lightBackground: "#F7F7F7", // Light mode background
        darkBackground: "#1A1A1A", // Dark mode background
        lightForeground: "#333333", // Light mode text
        darkForeground: "#FFFFFF", // Dark mode text
      },
      transitionProperty: {
        theme: "background-color, color",
      },
    },
  },
  // plugins: [tailwindcssAnimate],
} satisfies Config;

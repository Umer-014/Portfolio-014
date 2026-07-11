/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        void: "#0b0e14",
        "void-soft": "#10141d",
        panel: "#12151f",
        "glass-border": "rgba(255, 255, 255, 0.09)",
        "glass-border-hover": "rgba(255, 255, 255, 0.18)",
        violet: "#6c5ce7",
        "violet-soft": "#8b7cf6",
        cyan: "#00d9ff",
        amber: "#ffb86c",
        mint: "#4ade80",
        rose: "#ff6b8b",
        ink: "#f5f7fa",
        "ink-muted": "#8b93a7",
        "ink-faint": "#4d5568",
      },
    },
  },
  plugins: [],
};

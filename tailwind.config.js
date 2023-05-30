/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bumblebee: {
          primary: "#f9d72f",
          "primary-focus": "#e9c307",
          "primary-content": "#18182f",

          secondary: "#dfa62a",
          "secondary-focus": "#be8b1e",
          "secondary-content": "#ffffff",

          accent: "#18182f",
          "accent-focus": "#111122",
          "accent-content": "#ffffff",

          neutral: "#18182f",
          "neutral-focus": "#111122",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#f5f5f5",
          "base-300": "#e3e3e3",
          "base-content": "#000000",

          info: "#1c92f2",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
      "halloween",
      "winter",
    ],
  },
};

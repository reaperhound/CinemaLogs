/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grad-one" : " rgb(0, 0, 0)",
        "dark-grad-two": "rgb(64, 64, 64)",
        "light-grad-one": "#F5F7FA",
        "light-grad-two": "#B8C6DB",
      },
    },
  },
  plugins: [require("daisyui"), require("tailwindcss-animated")],
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
      {
        halloween: {
          primary: "#f28c18",
          "primary-focus": "#c9710d",
          "primary-content": "#131616",

          secondary: "#6d3b9b",
          "secondary-focus": "#532c77",
          "secondary-content": "#ffffff",

          accent: "#4fa300",
          "accent-focus": "#367000",
          "accent-content": "#ffffff",

          neutral: "#1b1d1d",
          "neutral-focus": "#131616",
          "neutral-content": "#ffffff",

          "base-100": "#1f1f1f",
          "base-200": "#1b1d1d",
          "base-300": "#131616",
          "base-content": "#ffffff",

          info: "#66c7ff",
          success: "#87cf3a",
          warning: "#e1d460",
          error: "#ff6b6b",

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
      "winter",
    ],
  },
};

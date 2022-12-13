/** @type {import('tailwindcss').Config} */
module.exports =
{
  content: ["./src/**/*.tsx"],
  theme:
  {
    screens:
    {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend:
    {
      colors:
      {
        "base-color": "rgb(var(--base-color) / <alpha-value>)",
        "base-high": "var(--base-high)",
        "base-medium-high": "var(--base-medium-high)",
        "base-medium": "var(--base-medium)",
        "base-medium-low": "var(--base-medium-low)",
        "base-low": "var(--base-low)",

        "alt-color": "rgb(var(--alt-color) / <alpha-value>)",
        "alt-high": "var(--alt-high)",
        "alt-medium-high": "var(--alt-medium-high)",
        "alt-medium": "var(--alt-medium)",
        "alt-medium-low": "var(--alt-medium-low)",
        "alt-low": "var(--alt-low)",

        "accent-primary": "var(--accent-color-primary)",
        "accent-secondary": "var(--accent-color-secondary)",
      },
      fontSize:
      {
        "xs": "0.75rem",
        "2xs": "0.625rem",
      },
      fontFamily:
      {
        bangers: "Bangers, cursive",
        carter: "'Carter One', cursive",
        //nunito: "'Nunito Sans', sans-serif",
      },
      //animation: 
      //{
      //  "bounce-once": "bounce 1s 1",
      //},
    },
  },
  plugins: [],
}
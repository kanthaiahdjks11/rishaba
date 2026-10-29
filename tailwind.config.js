/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0021C2",
        secondaryColor: "#1442FA",
        textPrimaryColor: "#000A36",
        textSecondaryColor: "#666C86"
      },
      fontSize: {
        xs: '14px',
        sm: "16px",
        md: "22px",
        lg: "24px",
        xl: "48px",
        '2xl': "64px",
      }
    },
  },
  plugins: [],
}
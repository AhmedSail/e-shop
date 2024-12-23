/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true, // يوسط الحاوية
      padding: "2rem", // يضيف حشوة داخل الحاوية
    },
    extend: {},
  },
  plugins: [],
};

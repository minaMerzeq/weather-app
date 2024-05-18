/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-700": "#374151",
        "gray-600": "#4B5563",
        "blue-600": "#2563EB",
        "indigo-600": "#4f46e5",
        "indigo-800": "#3730a3",
      },
      placeholderColor: {
        "gray-400": "#9CA3AF",
      },
    },
  },
  plugins: [],
};

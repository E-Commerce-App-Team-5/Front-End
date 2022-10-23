/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "font-quick": ["'Quicksand', sans-serif;"],
    },

    extend: {
      colors: {
        "base-green": "#122715",
        base: "#69C665",
        "light-green": "#F8FFFA",
        "search&text": "#BFBFBF",
        "text-color": "#838383",
        putih: "#FFFFFF",
      },
      textColor: {
        "text-green": "#69C665",
        "text-grey": "#838383",
      },
    },
  },
  plugins: [require("daisyui")],
};

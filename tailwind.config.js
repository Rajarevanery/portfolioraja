/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["Poppins"],
        subheader: ["Quicksand"],
        paragraph: ["Quattrocento"],
        paragraphtwo: ["DM Sans"],
        tiny: ["Tiny5"]
      },
      backgroundColor: {
        primary: "#021614"
      }
    },
  },
  plugins: [],
};

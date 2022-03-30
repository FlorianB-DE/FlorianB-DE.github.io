module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "jet-in": {
          "0%": {
            transform: "translateY(0)"
          },
          "40%": {
            transform: "translateY(0)"
          },
          "70%": {
            transform: "translateY(200%)"
          },
          "71%": {
            transform: "translateY(-200%)"
          }
        }
      },
      animation: {
        jet: "jet-in 1.5s linear infinite"
      }
    },
  },
  plugins: [],
}
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [],
};

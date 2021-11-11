module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (_theme) => ({
        placeHolder:
          "url('https://muge.eu/wp-content/uploads/2020/04/placeholder.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'orange-primary': '#ff9900'
      }
    },
  },
  plugins: [],
}

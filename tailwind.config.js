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
        'orange-primary': '#ff9900',
        'color-btn': '#F85A47',
      },
      dropShadow: {
        'custom-1': [
            '0px 13.2815px 6.51852px rgba(0, 0, 0, 0.02)',
            '0px 3.01852px 3.14815px rgba(0, 0, 0, 0.01)',
            '48px 58px 44px rgba(0, 0, 0, 0.2)'
        ]
      },
      boxShadow: {
        'custom-1': '0px 163px 80px rgba(0, 0, 0, 0.04), 0px 105.648px 46.8519px rgba(0, 0, 0, 0.0303704), 0px 62.7852px 25.4815px rgba(0, 0, 0, 0.0242963), 0px 32.6px 13px rgba(0, 0, 0, 0.02), 0px 13.2815px 6.51852px rgba(0, 0, 0, 0.0157037), 0px 3.01852px 3.14815px rgba(0, 0, 0, 0.00962963)',
      }
    },
  },
  plugins: [],
}

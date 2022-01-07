module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#27AE60',
        white: '#F2F2F2',
        gray: '#C4C4C4',
        black: '#333333',
      },
      animation: { 'spin-slow': 'spin 10s linear infinite' },
    },
    fontFamily: {
      balkan: ['balkan', 'sans-serif'],
    },
    fontSize: {
      parag: ['14px', '1'],
    },
  },
  plugins: [],
}

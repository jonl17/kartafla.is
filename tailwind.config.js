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
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        marquee: 'marquee 300s linear forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate3d(0%, 0, 0)' },
          '100%': { transform: 'translate3d(100%, 0, 0)' },
        },
      },
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

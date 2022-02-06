module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#27AE60',
        white: '#F2F2F2',
        gray: '#C4C4C4',
        black: '#333333',
        red: '#EB5757',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        marquee: 'marquee 50s linear infinite',
        marquee2: 'marquee2 50s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
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

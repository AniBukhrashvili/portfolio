/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        page: 'hsl(0 0% 13%)',
      },
      animation: {
        dot: 'drift var(--duration) ease-in-out infinite',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(var(--tx), var(--ty), 0)' },
        },
      },
    },
  },
  plugins: [],
};

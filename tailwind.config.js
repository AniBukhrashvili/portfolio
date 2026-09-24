/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        sm: '72rem',
        md: '72rem',
        lg: '72rem',
        xl: '72rem',
        '2xl': '72rem',
      },
    },
    extend: {
      colors: {
        page: 'hsl(0 0% 13%)',
        accent: '#e8b86d',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      maxWidth: {
        '9xl': '96rem',
      },
    },
  },
  plugins: [],
};

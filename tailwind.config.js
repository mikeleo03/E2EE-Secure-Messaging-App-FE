/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      '3xl': '1530px',
    },
    extend: {
      fontFamily: {
        alegreya: ['Alegreya', 'serif'],
        alegreyasans: ['Alegreya Sans', 'sans-serif'],
        magilio: ['Magilio'],
      },
      colors: {
        primaryOrange: '#FFC176',
        secondaryOrange: '#FFA06E',
        ternaryOrange: '#FDE3CF',
        primaryRed: '#F27267',
        secondaryRed: '#CC3A47',
        primaryBlue: '#79C7D4',
        secondaryBlue: '#20566E',
        primaryGreen: '#C6DD68',
        secondaryGreen: '#516E58',
        black: '#000000',
        primaryGrey: '#797979',
        secondaryGrey: '#D9D9D9',
        white: '#FFFFFF',
      },
      fontSize: {
        heading: '42px', // 32pt
        subHeading: '24px', // 18pt
        body: '16px', //12pt
        caption: '11px', // 8pt
      },
    },
  },
  plugins: [],
};

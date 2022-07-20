/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '370px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
    extend: {
      fontFamily: {
        alegreya: ['Alegreya', 'serif'],
        alegreyasans: ['Alegreya Sans', 'sans-serif'],
        magilio: ['Magilio'],
      },
      colors: {
        primaryYellow: '#FFEBB0',
        secondaryYellow: '#FFC176',
        tertiaryYellow: '#FFE779',
        quarternaryYellow: '#F5ECCB',
        primaryCream: '#FFFCF2',
        primaryOrange: '#FFA06F',
        secondaryOrange: '#FF7D4B',
        primaryBlack: '#171133',
        grey: '#D9D9D9',
        primaryGreen: '#2F4250',
        secondaryGreen: '#4F6266',
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

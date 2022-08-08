// const theme = require('./theme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    // extend: {
    //   colors: theme.colors,
    //   fontSize: theme.fontSize,
    //   fontFamily: theme.fontFamily,
    //   boxShadow: theme.boxShadow,
    //   borderRadius: theme.borderRadius,
    // },
    screens: {
      xs: '480px',
      sm: '600px',
      md: '782px',
      lg: '1920px',
      xl: '1280px',
      '2xl': '1440px',
    },
  },
};

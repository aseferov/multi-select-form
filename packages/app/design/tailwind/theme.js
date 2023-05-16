// @ts-check

/** @type {import('tailwindcss').Config['theme']} */
const theme = {
  extend: {
    colors: {
      marine: {
        DEFAULT: 'hsl(213, 96%, 18%)',
      },
      purplish: {
        DEFAULT: 'hsl(243, 100%, 62%)',
      },
      pastel: {
        DEFAULT: 'hsl(228, 100%, 84%)',
      },
      light: {
        DEFAULT: 'hsl(206, 94%, 87%)',
      },
      strawberry: {
        DEFAULT: 'hsl(354, 84%, 57%)',
      },
      cool: {
        DEFAULT: 'hsl(231, 11%, 63%)',
      },
      lightgray: {
        DEFAULT: 'hsl(229, 24%, 87%)',
      },
      magnolia: {
        DEFAULT: 'hsl(217, 100%, 97%)',
      },
      alabaster: {
        DEFAULT: 'hsl(231, 100%, 99%)',
      },
      white: {
        DEFAULT: 'hsl(0, 0%, 100%)',
      },
    },
    fontFamily: {
      // ubuntu: ['Ubuntu', 'sans-serif'],
    },
    fontSize: {
      16: '16px',
    },
    fontWeight: {
      400: '400',
      500: '500',
      700: '700',
    },
    screens: {
      sm: '375px',
      md: '1440px',
    },
  },
};

module.exports = {
  theme,
};

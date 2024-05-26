const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#0C1671",
        gold: "#DBA72C",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)']
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        },
        "slide-in-from-left": {
          '0%': { transform: 'translateX(-200px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        "slide-in-from-right": {
          '0%': { transform: 'translateX(200px) rotate(10deg)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        "slide-in-from-up": {
          '0%': { transform: 'translateY(-200px) rotate(20deg)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
        "slide-in-from-down": {
          '0%': { transform: 'translateY(200px) rotate(-20deg)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 }
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        "slide-in-from-left": 'slide-in-from-left 0.8s cubic-bezier(0, 0, 0, 1.62) forwards',
        "slide-in-from-right": 'slide-in-from-right 0.8s cubic-bezier(0, 0, 0, 1.62) forwards',
        "slide-in-from-up": 'slide-in-from-up 0.8s cubic-bezier(0, 0, 0, 1.62) forwards',
        "slide-in-from-down": 'slide-in-from-down 0.8s cubic-bezier(0, 0, 0, 1.62) forwards',
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#e7f5ff",
          100: "#d3eeff",
          200: "#b0ddff",
          300: "#81c3ff",
          400: "#4f9bff",
          500: "#2870ff",
          600: "#0442ff",
          700: "#0040ff",
          800: "#0033cc",
          900: "#0b35a4",
        },
        navy: {
          50: "#e9f5ff",
          100: "#d7eeff",
          200: "#b7ddff",
          300: "#8bc5ff",
          400: "#5e9eff",
          500: "#3978ff",
          600: "#174bff",
          700: "#0d3ef5",
          800: "#0e38c5",
          900: "#091740",
        },
        orange: {
          50: "#fef8ee",
          100: "#fdf1d7",
          200: "#fbdead",
          300: "#f8c679",
          400: "#f4a443",
          500: "#f0891f",
          600: "#ea7317",
          700: "#bb5413",
          800: "#954317",
          900: "#783816",
        },
        yellow: {
          50: "#fffeea",
          100: "#fff9c5",
          200: "#fff485",
          300: "#ffe846",
          400: "#ffd81b",
          500: "#ffb800",
          600: "#e28d00",
          700: "#bb6302",
          800: "#984c08",
          900: "#7c3f0b",
        },
        green: {
          50: "#f5f8f7",
          100: "#e5f1f1",
          200: "#c4e2e0",
          300: "#91c4bc",
          400: "#52a092",
          500: "#3c816b",
          600: "#316850",
          700: "#294e3e",
          800: "#1d352d",
          900: "#12201f",
        },
      },

      boxShadow: {
        customY: '0 6px 4px rgba(0, 0, 0, 0.25)',
        customX: '6px 0px 4px rgba(0, 0, 0, 0.25)',
      },

      colors: {
        customOrange: "#984B01", 
      },

      fontFamily: {
        lalezar: ['Lalezar', 'system-ui', 'sans-serif'],  
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
      },

      margin: {
        '75p': '75%',
      },

      backgroundImage: {
        'burger': "url('/assets/img/Combo 1 - Burger.jpg')",
        'content': "url('/assets/img/fini.jpg')",
      },

      keyframes: {
        modalFadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(-140px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },

      animation: {
        modalFadeIn: 'modalFadeIn 0.5s ease',
      },

      
    },
    plugins: [],
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arial-black': ['"Arial Black"', 'Arial', 'sans-serif'],
        'trebuchet': ['"Trebuchet MS"', 'Helvetica', 'sans-serif'],
        'lucida': ['"Lucida Sans Unicode"', 'sans-serif'],
      },
      keyframes: {
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' }, // Start and end at normal scale
          '50%': { transform: 'scale(1.1)', opacity: '1' },   // Scale up at 50%
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
      },
    
    animation: {
      zoomInOut: 'zoomInOut 2s ease-in-out infinite', // Infinite looping animation
    'right2left': 'slideLeft 0.5s ease-out',
    'left2right': 'slideRight 0.5s ease-out',
    },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        sksp: {
          navy: '#062A5A',
          navyDark: '#041A36',
          blue: '#082F63',
          blueLight: '#134074',
          accent: '#0066CC',
          gold: '#F2A900',
          goldDark: '#C59B27',
          lightBg: '#F4F7FA',
          surface: '#FFFFFF',
          textDark: '#10233D',
          muted: '#607086',
          borderColor: '#D7E0EA'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Oswald', 'Montserrat', 'Inter', 'sans-serif']
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(6, 42, 90, 0.08), 0 2px 6px -1px rgba(6, 42, 90, 0.04)',
        'card-hover': '0 14px 32px -4px rgba(6, 42, 90, 0.18), 0 6px 16px -2px rgba(6, 42, 90, 0.08)',
        'elevated': '0 20px 40px -10px rgba(4, 26, 54, 0.25)'
      },
      keyframes: {
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'marquee-left': 'marqueeLeft 40s linear infinite',
        'marquee-right': 'marqueeRight 40s linear infinite',
      },
    },
  },
  plugins: [],
}

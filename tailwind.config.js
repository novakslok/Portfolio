/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      colors: {
        graphite: '#0b1118',
        panel: '#111a24',
        steel: '#b8aa9b',
        signal: '#c7a27a',
      },
      ringColor: {
        DEFAULT: '#c7a27a',
      },
      boxShadow: {
        glow: '0 0 42px rgba(199, 162, 122, 0.22)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.38)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -16px, 0)' },
        },
        scan: {
          '0%': { transform: 'translateY(-110%)' },
          '100%': { transform: 'translateY(110%)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.18', transform: 'scaleX(0.84)' },
          '50%': { opacity: '0.78', transform: 'scaleX(1)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        scan: 'scan 7s linear infinite',
        pulseLine: 'pulseLine 3.4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.7s ease both',
      },
    },
  },
  plugins: [],
};

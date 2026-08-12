/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1C1B1A',
        ink: '#14181F',
        navy: '#1F2D3D',
        navydeep: '#16212D',
        offwhite: '#F6F4EF',
        warmwhite: '#FBFAF7',
        stone: '#8B8680',
        stonelight: '#C9C4BC',
        brass: '#A9824C',
        brasslight: '#C9A76B',
        line: '#E4E0D8',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      maxWidth: {
        content: '1400px',
      },
    },
  },
  plugins: [],
}

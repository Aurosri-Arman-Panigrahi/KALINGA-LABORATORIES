// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-void': '#020d18',
        'teal-primary': '#00f5c4',
        'neon-blue': '#1af0ff',
        'neon-purple': '#b44fff',
        carbon: '#0d1b2a',
        'text-primary': '#e0faff',
        'text-muted': '#4a7a8a',
        'glass-border': 'rgba(0, 245, 196, 0.2)',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        mono: ['"Share Tech Mono"', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'orbit': 'orbit 4s linear infinite',
        'ken-burns': 'kenBurns 20s ease-in-out infinite alternate',
        'float': 'float 3s ease-in-out infinite',
        'scan-line': 'scanLine 4s linear infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(0, 245, 196, 0.3), 0 0 20px rgba(0, 245, 196, 0.1)',
          },
          '50%': {
            boxShadow: '0 0 20px rgba(0, 245, 196, 0.6), 0 0 40px rgba(0, 245, 196, 0.2)',
          },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.1) translate(-1%, -1%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'cyber-gradient': 'linear-gradient(135deg, #020d18 0%, #0d1b2a 50%, #020d18 100%)',
        'teal-gradient': 'linear-gradient(135deg, rgba(0,245,196,0.1) 0%, rgba(26,240,255,0.05) 100%)',
        'portal-gradient': 'radial-gradient(circle, rgba(0,245,196,0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};

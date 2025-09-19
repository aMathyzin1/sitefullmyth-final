import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#4ecdc4',
        accent: '#ffe66d',
        dark: '#0c0c12',
        surface: '#111827'
      },
      boxShadow: {
        glow: '0 0 25px rgba(255, 107, 107, 0.35)'
      },
      fontFamily: {
        sans: ['var(--font-poppins)']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;

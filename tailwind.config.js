/** @type {import('tailwindcss').Config} */

const pxToRem = (px = 0, base = 16) => `${px / base}rem`

const colors = {
  primary: {
    200: '#60a5fa;',
    500: '#072999',
    800: '#05185A',
    800.8: 'rgba(5, 24, 90, 0.8)'
  },
  secondary: '#FCFCFC',
  tertiary: '#0A0A0A'
}

const spacing = {
  auto: 'auto',
  px: '1px',
  0.5: pxToRem(2),
  1: pxToRem(4),
  1.5: pxToRem(2.5),
  2: pxToRem(8),
  2.5: pxToRem(10),
  3: pxToRem(12),
  3.5: pxToRem(14),
  4: pxToRem(16),
  5: pxToRem(20),
  6: pxToRem(24),
  8: pxToRem(32),
  10: pxToRem(40),
  12: pxToRem(48),
  16: pxToRem(64),
  20: pxToRem(80),
  24: pxToRem(96),
  26: pxToRem(104),
  32: pxToRem(128),
  48: pxToRem(192),
  64: pxToRem(256),
  72: pxToRem(288),
  80: pxToRem(320),
  96: pxToRem(384),
  212.5: pxToRem(850)
}

module.exports = {
  plugins: [],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors,
      spacing,
      screens: {
        '3xl': '1920px'
      },
      maxWidth: spacing,
      maxHeight: spacing,
      minWidth: spacing,
      minHeight: spacing,
      gridTemplateColumns: { navbar: '64px 1fr 24px' }
    }
  }
}

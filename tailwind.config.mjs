/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        surface: {
          50:  'rgb(var(--color-surface-50) / <alpha-value>)',
          100: 'rgb(var(--color-surface-100) / <alpha-value>)',
          200: 'rgb(var(--color-surface-200) / <alpha-value>)',
          800: 'rgb(var(--color-surface-800) / <alpha-value>)',
          900: 'rgb(var(--color-surface-900) / <alpha-value>)',
          950: 'rgb(var(--color-surface-950) / <alpha-value>)',
        },
        accent: {
          400: 'rgb(var(--color-accent-400) / <alpha-value>)',
          500: 'rgb(var(--color-accent-500) / <alpha-value>)',
          600: 'rgb(var(--color-accent-600) / <alpha-value>)',
        },
      },
      boxShadow: {
        'glow-sm':    '0 0 20px -4px rgb(139 92 246 / 0.35)',
        'glow-md':    '0 0 40px -8px rgb(139 92 246 / 0.4)',
        'glow-lg':    '0 0 60px -12px rgb(139 92 246 / 0.45)',
        'card-hover': '0 24px 48px -12px rgb(0 0 0 / 0.55), 0 0 32px -8px rgb(139 92 246 / 0.22)',
        'card-glow':  'inset 0 1px 0 rgb(255 255 255 / 0.06)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body':     theme('colors.zinc[700]'),
            '--tw-prose-headings': theme('colors.zinc[900]'),
            '--tw-prose-code':     theme('colors.zinc[800]'),
            '--tw-prose-links':    theme('colors.violet[600]'),
          },
        },
        invert: {
          css: {
            '--tw-prose-body':     theme('colors.zinc[300]'),
            '--tw-prose-headings': theme('colors.zinc[100]'),
            '--tw-prose-code':     theme('colors.zinc[200]'),
            '--tw-prose-links':    theme('colors.violet[400]'),
          },
        },
      }),
      animation: {
        'fade-up':   'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'shimmer':   'shimmer 2.4s linear infinite',
        'float':     'float 6s ease-in-out infinite',
        'pulse-glow':'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.75' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

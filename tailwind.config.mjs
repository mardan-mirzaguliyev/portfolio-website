/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        brand: '#015FFC',
        // Theme-aware page colours — RGB triplets set in site.css
        paper: 'rgb(var(--paper) / <alpha-value>)',
        ink:   'rgb(var(--ink) / <alpha-value>)',
      },
      // Article body — ink/brand variables follow day/night on their own, so no prose-invert needed
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body':         'rgb(var(--ink) / 0.75)',
            '--tw-prose-headings':     'rgb(var(--ink))',
            '--tw-prose-lead':         'rgb(var(--ink) / 0.65)',
            '--tw-prose-links':        '#015FFC',
            '--tw-prose-bold':         'rgb(var(--ink))',
            '--tw-prose-counters':     'rgb(var(--ink) / 0.45)',
            '--tw-prose-bullets':      'rgb(var(--ink) / 0.3)',
            '--tw-prose-hr':           'rgb(var(--ink) / 0.1)',
            '--tw-prose-quotes':       'rgb(var(--ink))',
            '--tw-prose-quote-borders':'#015FFC',
            '--tw-prose-captions':     'rgb(var(--ink) / 0.5)',
            '--tw-prose-code':         'rgb(var(--ink))',
            '--tw-prose-th-borders':   'rgb(var(--ink) / 0.15)',
            '--tw-prose-td-borders':   'rgb(var(--ink) / 0.1)',
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};

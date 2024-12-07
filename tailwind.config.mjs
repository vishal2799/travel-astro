/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['var(--font-raleway)'],
      },
      colors: {
        primary: {
          100: '#FFE8F0',
          DEFAULT: '#EE2B69',
        },
        secondary: '#FBE843',
        black: {
          100: '#333333',
          200: '#141413',
          300: '#7D8087',
          DEFAULT: '#000000',
        },
        white: {
          100: '#F7F7F7',
          DEFAULT: '#FFFFFF',
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  purge: ['./public/**/*.html', './src/**/*.{astro,js,svelte,ts,vue}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
};

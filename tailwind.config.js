/** @type {import('tailwindcss').Config} */
export default {
  content: ["/'index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: {
        width: '1px',
        track: 'transparent',
        thumb: 'rgba(156, 163, 175, var(--tw-bg-opacity))',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'transparent',
      },
    },
  },
   plugins: [
    require('tailwind-scrollbar'),
  ],
}


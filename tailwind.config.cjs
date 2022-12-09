/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/views/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        0: '0',
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
        7: '32px',
        8: '40px',
        9: '48px',
        10: '56px',
      },
    },
  },
  plugins: [],
};

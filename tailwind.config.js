/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: '#163A34',
          800: '#395852',
          600: '#395852',
          300: '#D0DCD9',
          200: '#E0E6E3',
          100: '#F6F5F1',
          0: '#FFFFFF'
        },
        orange: {
          500: '#FE9F6B'
        },
        teal: {
          500: '#49AC9B'
        },
        indigo: {
          500: '#697DDB'
        }
      },
      spacing: {
        1800: '140px'
      },
      fontSize: {
        preset1: '72px',
        preset1_tablet: '64px',
        preset1_mobile: '52px',
        preset2: '48px',
        preset2_mobile: '40px',
        preset3: '32px',
        preset4: '24px',
        preset5: '20px',
        preset6: '18px',
        preset7: '16px',
        preset8: '14px',
      },
    },
  },
  plugins: [
      require('@tailwindcss/line-clamp'),
  ],
}


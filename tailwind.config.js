/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/constants/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'party-people': "url('/images/people-party.png')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        theme: {
          green: {
            50: "#F0FDF5",
            100: "#DCFCE8",
            200: "#BBF7D1",
            300: "#86EFAD",
            400: "#4ADE81",
            500: "#22C55E",
            600: "#16A34A",
            700: "#15803C",
            800: "#166533",
            900: "#14532B",
            950: "#052E14",
          },
          neutral: {
            0: "#FFFFFF",
            50: "#FAFAFA",
            100: "#FAFAFA",
            200: "#E0E0E0",
            300: "#B3B3B3",
            400: "#999999 ",
            500: "#999999",
            600: "#6B6B6B",
            700: "#333333",
            800: "#1A1A1A",
            900: "#0D0D0D",
            950: "#000000",
          },
          purple: {
            50: "#EFEAFA",
            100: "#DFD6F5",
            200: "#BFACEC",
            300: "#A083E2",
            400: "#805AD8 ",
            500: "#4D27A5",
            600: "#3A1D7C",
            700: "#261353",
            800: "#180C33",
            900: "#130A29",
            950: "#0A0515",
          },
          red: {
            50: "#FEF2F2",
            100: "#FEE2E2",
            200: "#FECACA",
            300: "#FCA5A5",
            400: "#F87171 ",
            500: "#EF4444",
            600: "#DC2626",
            700: "#B91C1C",
            800: "#991B1B",
            900: "#7F1D1D",
            950: "#450A0A",
          },
          yellow: {
            50: "#FFF5E5",
            100: "#FFEBCC",
            200: "#FFD699",
            300: "#FFC266",
            400: "#FFBE5D ",
            500: "#FFAD33",
            600: "#CC7A00",
            700: "#995C00",
            800: "#663D00",
            900: "#331F00",
            950: "#1A0F00",
          },
        }
      },
      keyframes: {
        bounceUpDown: {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(-10px)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
        scaleUpDown: {
          '0%, 100%': { transform: 'scale(1)', animationTimingFunction: 'ease-in-out' },
          '50%': { transform: 'scale(1.2)', animationTimingFunction: 'ease-in-out' },
        }
      },
      animation: {
        bounceUpDown: 'bounceUpDown 2s infinite',
        scaleUpDown: 'scaleUpDown 2s infinite'
      },
    },
  },
  plugins: [],
};
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F5EEDD', // Primary color
        secondary: '#7AE2CF', // Secondary color
        'secondary-hover': '#077A7D', // Hover color for secondary
        'primary-text': '#06202B', // Primary text color
      },
      textColor: {
        primary: '#06202B', // Primary text color
      },
    },
  },
  plugins: [],
}

export default config


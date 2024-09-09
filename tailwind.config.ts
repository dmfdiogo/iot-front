import type { Config } from 'tailwindcss'
import twColors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: twColors.orange[400],
        primaryLit: twColors.orange[300],
        offwhite: twColors.zinc[100],
        offwhite2: twColors.zinc[400],
      },
    },
  },
  plugins: [],
}
export default config

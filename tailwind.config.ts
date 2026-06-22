import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep:   '#2b616b',
          mid:    '#66a2ad',
          yellow: '#f4db75',
          cream:  '#e7e3dd',
        },
      },
      fontFamily: {
        display:  ['var(--font-display)', 'serif'],
        script:   ['var(--font-script)', 'cursive'],
        body:     ['var(--font-body)', 'sans-serif'],
        poppins:  ['var(--font-poppins)', 'sans-serif'],
        seasons:  ['"The Seasons"', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          graphite: '#2C3338', // Темный графит
          steel: '#71797E',    // Стальной серый
          eco: '#4A5D45',      // Приглушенный зеленый
          paper: '#F8F9FA',    // Светлый фон
        },
      },
    },
  },
  plugins: [],
}
export default config

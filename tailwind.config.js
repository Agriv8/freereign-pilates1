/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spa: {
          warm: '#E8DDD4',      // Main warm beige background
          cream: '#F5F1EB',     // Light cream
          sand: '#D4C4B0',      // Sandy beige
          earth: '#8B6914',     // Darker earth brown for better contrast
          charcoal: '#2D2D2D',  // Darker charcoal for better readability
          stone: '#6B5B4F',     // Darker stone for contrast
          ivory: '#FAF8F5',     // Almost white ivory
          text: '#1A1A1A',      // Very dark text for maximum readability
          accent: '#7A5928'     // Brown accent color
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
}
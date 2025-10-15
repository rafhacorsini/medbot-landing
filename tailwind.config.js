/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#607afb", // Azul principal
        secondary: '#8B5CF6', // Roxo secundário
        accent: "#ff8c42", // Laranja para destaque
        'background-light': '#f5f6f8',
        'background-dark': '#0a0f14', // Tom de escuro para a seção de preços
        'surface-light': '#ffffff',
        'surface-dark': '#111827', // Cor de superfície para o toggle
        'content-light': '#0f1323',
        'content-dark': '#f5f6f8',
        'subtle-light': '#e3e4e6',
        'subtle-dark': '#1a203a',
        'muted-light': '#6b7280',
        'muted-dark': '#9ca3af', // Texto sutil no modo escuro
        dark: '#111827',
        'dark-blue': '#1a2035',
        light: '#f9fafb',
        success: '#10B981',
      },
      boxShadow: {
        'glow-primary': '0 0 20px 0 rgba(96, 122, 251, 0.5)',
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
    },
  },
  plugins: [],
}
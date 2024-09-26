/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}', // Asegúrate de incluir todos los archivos Vue y JS
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Times New Roman', 'Times New Roman']
      },
    },
  },
  plugins: [],
}


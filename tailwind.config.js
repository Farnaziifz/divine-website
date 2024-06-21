module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: '#9A6649',
      secondary: '#FBECD3',
      primaryOrange: '#F28705',
      white: '#fff',
      transparent: 'transparent',
      danger: '#9a2626',
      'light-success': '#C9F9D1',
      'text-gray': '#828181',
      'sec-gray': '#CCCCCC',
    },
    container: {
      center: true,
    },
    extend: {
      order: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
      },
      height: {
        img: '400px',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

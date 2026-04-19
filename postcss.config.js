module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      // Add vendor prefixes for better cross-browser compatibility
      overrideBrowserslist: ['defaults', 'not IE 11'],
    },
  },
}

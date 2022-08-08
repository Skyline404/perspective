module.exports = {
  singleQuote: true,
  printWidth: 150,
  htmlWhitespaceSensitivity: 'css',
  tabWidth: 2,
  tailwindConfig: './tailwind.config.js',
  plugins: [require('prettier-plugin-tailwindcss')],
};

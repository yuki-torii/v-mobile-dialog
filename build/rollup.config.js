const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const vue = require('rollup-plugin-vue')
const version = process.env.VERSION || require('../package.json').version

module.exports = {
  entry: process.env.ESM ? 'src/index.esm.js' : 'src/index.js',
  dest: process.env.ESM ? 'dist/v-mobile-dialog.esm.js' : 'dist/v-mobile-dialog.js',
  format: process.env.ESM ? 'es' : 'umd',
  moduleName: 'v-mobile-dialog',
  plugins: [
    vue({
      options: {
        styleToImports: true
      }
    }),
    replace({ __VERSION__: version }),
    buble()
  ],
  banner:
`/**
 * v-mobile-dialog v${version}
 * (c) ${new Date().getFullYear()} Limichange
 * @license MIT
 */`
}

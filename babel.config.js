module.exports = {
  presets: [
    '@vue/app'
  ],
  //按需下载
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant']
  ],
}

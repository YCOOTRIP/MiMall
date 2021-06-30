module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'], // 预设解码插件
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ]
  ]
}

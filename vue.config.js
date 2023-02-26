const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  devServer: {
      open: process.platform === 'linux',
      host: '0.0.0.0',
      port: 8080, // CHANGE YOUR PORT HERE!
      https: true,
  },
}
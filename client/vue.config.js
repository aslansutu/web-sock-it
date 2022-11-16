module.exports = {
    devServer: {
      open: process.platform === 'linux',
      host: '0.0.0.0',
      port: 8000, // CHANGE YOUR PORT HERE!
      https: true,
      hotOnly: false,
    },
  }
const webpack = require('./webpack.config')

module.exports = config => {
  config.set({
    plugins: [
      'karma-webpack'
    , 'karma-jasmine'
    , 'karma-chrome-launcher'
    ]
  , frameworks: ['jasmine']
  , files: ['__tests__/**/*.spec.ts']
  , preprocessors: {
      '__tests__/**/*.spec.ts': ['webpack']
    }
  , browsers: ['ChromeHeadless']
  , webpack
  })
}

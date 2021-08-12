let debug   = process.env.NODE_ENV !== "production"
let webpack = require('webpack')
let path    = require('path')

module.exports = {
  context: path.join(__dirname, "src"), 
  entry: './js/client.js', 
  module: {
    rules: [{
      test: /\.jsx?$/, 
      exclude: /(node_modules|bower_components)/, 
      use: [{
        loader: 'babel-loader', 
        options: {
          plugins: ['react-html-attrs'],
          presets: ['@babel/preset-react', '@babel/preset-env']
        }
      }]
    }]
  }, 
  output: {
    path: __dirname + "/src/", 
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(), 
    new webpack.optimize.UplifyJsPlugin({ mangle: false, sourcemap: false }), 
  ]
};
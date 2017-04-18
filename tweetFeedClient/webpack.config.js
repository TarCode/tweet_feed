module.exports = {
  entry: './src',
  output: {
    filename: 'bundle.js',
    path: './dist',
    publicPath: '/'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    historyApiFallback: true,
    port: 3001
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [ 'es2015', 'react', 'stage-2' ]
        }
      }
    ]
  }
}

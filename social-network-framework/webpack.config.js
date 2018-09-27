const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [{
          loader: 'file-loader',
          options: {}
      }]
  }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.png']
  },
  output: {
    path: __dirname + './public',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './public',
    hot: true
  }
};
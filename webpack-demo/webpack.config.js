const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 entry: {
   index: './src/index.js',
   print: './src/print.js',
 },
  devtool: 'inline-source-map',
  devServer: {
  static: './dist',
  },
 module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
  ],
},
 plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/index.html',
    }),
  ],
  output: {
   filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },  
  optimization: {
    runtimeChunk: 'single',
  },
};
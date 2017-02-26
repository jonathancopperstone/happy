const path = require('path');
const webpack = require('webpack');
const appName = 'happy';

const config = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    [appName]: [
      //'webpack-dev-server/client?http://0.0.0.0:3000',
      'webpack/hot/only-dev-server',
      'webpack-hot-middleware/client',
      './src/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'build/'),
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|jpeg|ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  watch: process.env.WATCH ? true : false
};

module.exports = config;

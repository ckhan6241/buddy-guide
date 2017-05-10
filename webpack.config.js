const { resolve } = require('path')
const _ = require('lodash')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const DEV = (process.env.NODE_ENV === 'development')

const entryPoints = (DEV ?
  [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index'
  ] : [
    'babel-polyfill',
    './app/index'
  ]
)

module.exports = {
	entry: entryPoints,
	output: {
		filename: 'bundle.js',
		path: resolve(__dirname, './build')
	},
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: resolve(__dirname, './public/index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ].filter(_.identity),
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        include: [
          resolve(__dirname, './app')
        ]
      },
      {
        test: /\.css$/,
        loaders: [ 'style-loader', 'css-loader' ],
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {
        test: /\.(ico|jpg|jpeg|png|gif|otf|webp)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'static/media/[name].[hash:8].[ext]'
        }
      }
    ]
  },
	devServer: {
    hot: true,
    contentBase: resolve(__dirname, "./build"),
    port: 3000,
    host: "0.0.0.0",
    publicPath: '/',
    historyApiFallback: true
	}
}
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader')

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
const DotenvPlugin = new Dotenv();
const CheckerPluginConfig = new CheckerPlugin();

console.log(__dirname)
module.exports = {
  entry: __dirname + '/src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          },
        ]
      },
      // {
      //   test: /\.(png|gif|jpg|jpeg|svg|ico|mp4|mp3)$/,
      //   use:  'file-loader?name=[name].[ext]'
      // },
      // {
      //   test: /\.(jpe?g|png|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
      //   use: 'base64-inline-loader'
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|ico|mp4|mp3|wav)$/,
        type: "asset/resource",
      },
    ]
  },
  output: {
    filename: 'transformed.js',
    path: __dirname + '/dist',
    publicPath: '/', //reload page when refresh browser (react-router /ex/ex)
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  devServer: {
    contentBase: './dist',
    port: 8080,
    historyApiFallback: true
  },
  plugins: [
    HTMLWebpackPluginConfig,
    DotenvPlugin,
    CheckerPluginConfig
  ],
  mode: 'development',
};
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLessPlugin = new ExtractTextPlugin({
    filename: 'style.css'
    // filename: "[name].[contenthash].css",
    // disable: process.env.NODE_ENV === "development"
});

// Environment
var configEnv = process.env.NODE_ENV || 'development';
console.log("Environment = " + configEnv);

// Not sure why we need to fiddle with the publicPath here .
// There should be a better/cleaner config approach to all this
var publicPath = configEnv == 'production' ? '../dist/' : '/dist/';

// Load application configuration and make available via DefinePlugin
var configObj = JSON.parse(fs.readFileSync('./app/config.json', 'utf8'));
const definePlugin = new webpack.DefinePlugin({
  APP_CONFIG: JSON.stringify(configObj[configEnv])
});

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(woff2?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: 'file-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: 'file-loader'
      },
      {
        test: /\.html$/,
        //use: 'raw-loader'
        use: 'file-loader'
      },
      {
        test: /\.less$/,
        // use: 'less-loader'
        use: extractLessPlugin.extract({
              use: [{loader: "css-loader"},
                    {loader: "less-loader"}
                    ],
              // use style-loader in development
              // fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractLessPlugin,
    definePlugin
  ],
  // devServer: {
  //   watchOptions: {
  //     poll: true
  //   }
  // },
  devtool: 'cheap-module-source-map'
};

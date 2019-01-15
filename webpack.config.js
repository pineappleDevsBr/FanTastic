const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const WebpackShellPlugin = require('webpack-shell-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const isDev = process.env.NODE_ENV !== 'production';

let config = {
  context: path.resolve(__dirname, './src'),
  entry: ['./assets/js/main.js', './assets/scss/main.scss'],
  devtool: isDev ? 'eval-cheap-module-source-map' : 'none',
  output: {
    path: path.resolve(__dirname, 'docs/assets'),
    filename: 'js/main.js',
    publicPath: 'assets/'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss$/,
        use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
          publicPath: '../',
          use: ['css-loader', 'postcss-loader', 'sass-loader'],
          fallback: 'style-loader'
        })),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          limit: 10000,
          name: 'images/[name].[ext]',
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        exclude: /node_modules/,
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'fonts/[name].[ext]',
          },
        },
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
    new CopyWebpackPlugin([
      { from: 'assets/static', to: 'static' },
    ]),
    new StyleLintPlugin({
      configFile: path.join(__dirname, './.stylelintrc'),
      syntax: 'scss',
      failOnError: false
    }),
    new ExtractTextWebpackPlugin('css/main.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.js',
      minChunks (module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, './node_modules')
          ) === 0
        )
      }
    }),
  ],
  devServer: {
    contentBase: [ path.resolve(__dirname, './docs') ],
    inline: true,
    port: 4000,
    open: true,
    watchContentBase: true,
    overlay: {
      errors: true
    }
  }
}

if (!isDev) {
  config.plugins.push(
    new WebpackShellPlugin({
      onBuildStart: [
        'echo \nBuild Project...\n',
        'jekyll build'
      ],
    }),
    new UglifyJSPlugin()
  );
} else {
  config.plugins.push(new WebpackShellPlugin({
    onBuildStart: [
      'echo \nRun Project...\n',
      'jekyll build --watch'
    ],
  }));
}

module.exports = config;


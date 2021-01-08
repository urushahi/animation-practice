const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const tinyPngWebpackPlugin = require("tinypng-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    home: "./src/js/chunks/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./assets/[name].js",
  },
  mode: "production",

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(sa|sc)ss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
        }),
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "./assets/images",
              name: "[name].[ext]",
            },
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/fonts",
            },
          },
        ],
      },
    ],
  },

  externals: {
    jquery: "jQuery",
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },

  resolve: {
    extensions: ["*", ".js", ".jsx", ".json"],
  },
  //default configuration of SplitChunkPlugin
  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 30000,
  //     maxSize: 0,
  //     minChunks: 1,
  //     maxAsyncRequests: 5,
  //     maxInitialRequests: 3,
  //     automaticNameDelimiter: '~',
  //     automaticNameMaxLength: 30,
  //     name: true,
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true
  //       }
  //     }
  //   }
  // },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin({
      filename: "style.css",
    }),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html",
      chunks: ["home", "vendors"],
    }),
    
    // new CompressionPlugin({
    //   filename: '[path].br[query]',
    //   algorithm: 'gzip',
    //   test: /\.(js|css|html|svg)$/,
    //   compressionOptions: {
    //     level: 9
    //   },
    //   threshold: 10240,
    //   minRatio: 0.8,
    //   deleteOriginalAssets: false,
    // })
    // ,
    // new tinyPngWebpackPlugin({
    //   key:'mdHc0njPVyvSxrxhNvYb8RH15lDkqlMc',
    // })

    // uncomment it to run tinypngplugin

    //if you want to pass in options, you can do so:
    //new ExtractTextPlugin({
    //  filename: 'style.css'
    //})
  ],
  devtool: "",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
  },
};

const { merge } = require("webpack-merge");

const common = require("./webpack.common");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");

const CompressionPlugin = require("compression-webpack-plugin");

module.exports = merge(common, {
  mode: "production",

  devtool: false,

  module: {
    rules: [
      {
        test: /\.css$/,

        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[contenthash].css",
    }),

    new CompressionPlugin({
      algorithm: "gzip",
      test: /\.(js|css|html|svg)$/,
    }),
  ],

  optimization: {
    minimize: true,

    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
      ,
      new CssMinimizerPlugin(),
    ],

    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },

    runtimeChunk: "single",
  },
});

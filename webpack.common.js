const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.jsx",

  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "assets/js/[name].[contenthash].js",
    publicPath: "/",
    clean: true,
  },

  resolve: {
    extensions: [".js", ".jsx"],

    alias: {
      "@": path.resolve(__dirname, "../src"),
      "@components": path.resolve(__dirname, "../src/components"),
      "@pages": path.resolve(__dirname, "../src/pages"),
      "@services": path.resolve(__dirname, "../src/services"),
    },
  },

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
        test: /\.css$/,

        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,

        type: "asset/resource",

        generator: {
          filename: "assets/images/[hash][ext]",
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,

        type: "asset/resource",

        generator: {
          filename: "assets/fonts/[hash][ext]",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      // favicon: "./public/favicon.ico",
    }),
  ],
};

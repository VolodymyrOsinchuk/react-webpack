// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CompressionPlugin = require("compression-webpack-plugin");

// module.exports = {
//   mode: "development",
//   entry: {
//     entry: "./src/index.js",
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//       filename: "index.html",
//       template: "src/public/index.html",
//     }),
//     new CompressionPlugin({
//       test: /\.js|jsx(\?.*)?$/i,
//       test: /\.css$/,
//     }),
//   ],
//   output: {
//     filename: "[name].bundle.js",
//     path: path.resolve(__dirname, "build"),
//     clean: true,
//     publicPath: "/",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//         options: {
//           presets: ["@babel/preset-env", "@babel/preset-react"], // Ajoutez les presets nécessaires
//         },
//       },
//       {
//         test: /\.css$/,
//         use: [
//           { loader: "style-loader" },
//           {
//             loader: "css-loader",
//             options: {
//               modules: true,
//             },
//           },
//         ],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx"], // Ajoutez .jsx dans la liste des extensions à résoudre
//   },
//   performance: {
//     hints: false,
//     maxEntrypointSize: 512000,
//     maxAssetSize: 512000,
//   },
// };

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
  ],
};

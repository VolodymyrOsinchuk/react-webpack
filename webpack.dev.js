// const path = require("path");
// const { merge } = require("webpack-merge");
// const common = require("./webpack.common.js");

// module.exports = merge(common, {
//   mode: "development",
//   devtool: "inline-source-map",
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader"],
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx"], // Ajoutez .jsx dans la liste des extensions à résoudre
//   },
//   devServer: {
//     contentBase: path.join(__dirname, "/build"),
//     port: 3000,
//     open: true,
//     compress: true,
//   },
// });
const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "build"),
    port: 3000,
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
});

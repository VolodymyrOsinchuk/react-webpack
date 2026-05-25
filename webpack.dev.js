const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",

  devtool: "eval-source-map",

  devServer: {
    port: 8080,

    open: true,

    hot: true,

    compress: true,

    historyApiFallback: true,

    static: {
      directory: "./src/public",
    },

    proxy: [
      {
        context: ["/api", "/user"],
        target: "http://localhost:3000",
      },
    ],
  },
});

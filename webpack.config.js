var path = require("path")
const TerserPlugin = require("terser-webpack-plugin")
var webpack = require("webpack")
const CopyPlugin = require("copy-webpack-plugin")
const { TsconfigPathsPlugin } = require("tsconfig-paths-webpack-plugin")

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "build")
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    plugins: [new TsconfigPathsPlugin()]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: "ts-loader", options: { transpileOnly: true } }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "images",
            //publicPath: "bin/images"
          }
        }
      },
      {
        test: /\.html/,
        use: "file-loader?name=[name].[ext]"
      }
    ]
  },
  plugins: [],
  devServer: {
    static: "./src"
  }
}

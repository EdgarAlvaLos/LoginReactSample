const HtmlWebpackPlugin = require("html-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
//const json = require('json-loader!./public/file.json');
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "./public/index.html",
    }),
    new CompressionPlugin(),

    new CopyPlugin({
      patterns: [
        {
          from: "public/favicon.png",
          to: path.resolve(__dirname, "build"),
        },
      ],
    }),
  ],
  output: {
    filename: "[name].bundle-[hash].js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.txt$/i,
        use: "raw-loader",
      },
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
        test: /\.(png|svg|jpg|gif)$/,
        loader: "file-loader?name=[name].[ext]",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/images/",
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(csv|tsv)$/,
        use: ["csv-loader"],
      },
      {
        test: /\.xml$/,
        use: ["xml-loader"],
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: "json-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};

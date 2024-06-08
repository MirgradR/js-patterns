const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/script.js", // точка входа
  output: {
    filename: "bundle.js", // выходной файл
    path: path.resolve(__dirname, "dist"), // папка для сборки
  },
  module: {
    rules: [
      {
        test: /\.css$/, // для файлов .css
        use: [MiniCssExtractPlugin.loader, "css-loader"], // обработка css
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // шаблон HTML
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }), // извлекает CSS в отдельные файлы
    new CopyPlugin({
      patterns: [{ from: "src/components", to: "components" }],
    }),
  ],
};

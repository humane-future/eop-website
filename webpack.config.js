const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');
const path = require('path');

module.exports = ({ mode }) => {
  return {
    mode,
    entry: {
      app: './src/index.tsx',
    },
    output: {
      filename: '[name].[fullhash].bundle.js',
      path: path.resolve(__dirname, 'bundle'),
      publicPath: '/',
    },
    resolve: {
      extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-typescript',
                '@babel/preset-react',
                [
                  '@babel/preset-env',
                  {
                    targets: '> 0.25%, not dead',
                  },
                ],
              ],
            },
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new DefinePlugin({
        MODE: JSON.stringify(mode),
      }),
    ],
  };
};

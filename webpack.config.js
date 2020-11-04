const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const babel = {
  loader: 'babel-loader',
  options: {
    presets: [
      '@babel/preset-typescript',
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          targets: '> 0.25%, not dead',
          useBuiltIns: 'usage',
          corejs: 3,
        },
      ],
    ],
    plugins: [['babel-plugin-styled-components', { pure: true }]],
  },
};

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
          use: babel,
        },
        {
          test: /\.inline\.svg$/,
          use: [
            babel,
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new DefinePlugin({
        MODE: JSON.stringify(mode),
        'process.env.CONTENTFUL_SPACE_ID': JSON.stringify(
          process.env.CONTENTFUL_SPACE_ID,
        ),
        'process.env.CONTENTFUL_DELIVERY_TOKEN': JSON.stringify(
          process.env.CONTENTFUL_DELIVERY_TOKEN,
        ),
      }),
    ],
    devServer: {
      historyApiFallback: {
        index: 'index.html',
      },
    },
  };
};

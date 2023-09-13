const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const CopyPlugin = require('copy-webpack-plugin');

const deps = require('./package.json').dependencies;
module.exports = (_, argv) => ({
  output: {
    publicPath: 'auto',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },

  devServer: {
    port: 8080,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [{ from: './src/components/WorkerThread/util.js' }],
    }),
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'host-remote.js',
      remotes: {
        'header-remote': 'header@http://localhost:8001/header-remote.js',
        'host-remote': 'host@http://localhost:8080/host-remote.js',
        ...(process.env.NODE_ENV === 'production' && {
          'header-remote':
            'header@https://web-pf-header.vercel.app/header-remote.js',
          'host-remote':
            'host@https://web-performance-ten.vercel.app/host-remote.js',
        }),
      },
      exposes: {
        './Shell': './src/App',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
    }),
  ],
});

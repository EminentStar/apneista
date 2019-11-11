const path = require('path');


const entries = {
  app: ['./src/client.jsx'],
};

const modules = {
  rules: [{
    test: /\.jsx?/,
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react'
      ],
      plugins: ['@babel/plugin-proposal-class-properties'],
    }
  }]
};

module.exports = {
  name: 'apneista-front-web-setting',
  mode: 'development',
  devtool: 'eval',

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: entries,
  module: modules,
  output: {
    path: path.join(__dirname, 'dist'),
  },

};
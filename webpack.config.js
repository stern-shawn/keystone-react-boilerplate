var config = {
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: './public'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        // ES6 hotness
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(scss|css)$/,
        loaders: ["style-loader", "css-loader?modules&sourceMap&localIdentName=[local]___[hash:base64:5]", "sass-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[name].[ext]'
      },
    ]
  },
  // Auto-resolve, ie. importing /components/App will pull index.jsx instead
  // of needing to explicity say /components/App/index.jsx
  resolve: {
    extensions: [
      '.js',
      '.jsx',
    ],
  },
};

// Source mapping, yee :)
config.devtool = 'source-map';

module.exports = config;

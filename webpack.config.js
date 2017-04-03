var path = require("path");

module.exports = {
    entry: { 
      path: path.join(__dirname, 'app', 'assets', 'javascripts','components')
    },

    output: {
      path: path.join(__dirname, 'app', 'assets', 'javascripts'),
      filename: "react_assets.js",
    },

    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      loaders: [
          { 
            test: /\.jsx$/, 
            loaders:[ "babel-loader" ],
            exclude:path.resolve(__dirname, "node_modules"),
            query: {
              presets: ['react','es2015']
            }
          }
      ],
    }
};

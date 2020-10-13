const path = require('path');

module.exports = {
    entry: './src/main.js',
    output:{
        path:path.join(__dirname,'public'),
        filename:'bundle.js'
    },

    module:{
      rules:[{
        loader:"babel-loader",
        test : /\.(jsx|js)$/,
        exclude:/node_modules/
      },{
        test :/\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname,'public'),
      inline: true,
      port: 9000

    }

};
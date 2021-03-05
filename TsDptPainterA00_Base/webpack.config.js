var path = require('path');
module.exports = {
  //entry: './src/factory/client_factory.ts',
  //entry: './src/facade/client_facade.ts',
  entry: './src/painter/painter_main.ts',
  output: {
	filename: 'app.js',
	path: path.resolve(__dirname, 'dist')
  },
  module:{
        rules:[{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
                transpileOnly: true
            }
        }]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
};

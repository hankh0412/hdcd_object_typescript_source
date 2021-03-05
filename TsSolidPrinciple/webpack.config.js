var path = require('path');
module.exports = {
  //entry: './src/dip/after/client_main.ts',
  //entry: './src/dip/after_change/client_main.ts',
  //entry: './src/dip/before/client_main.ts',
  //entry: './src/dip/before_change/client_main.ts',

  //entry: './src/isp/after/client_main.ts',
  //entry: './src/isp/after_change/client_main.ts',
  //entry: './src/isp/before/client_main.ts',
  //entry: './src/isp/before_change/client_main.ts',

  //entry: './src/lsp/after/client_main.ts',
  //entry: './src/lsp/after_change/client_main.ts',
  //entry: './src/lsp/before/client_main.ts',
  //entry: './src/lsp/before_change/client_main.ts',

  //entry: './src/ocp/after/client_main.ts',
  //entry: './src/ocp/after_change/client_main.ts',
  //entry: './src/ocp/before/client_main.ts',
  //entry: './src/ocp/before_change/client_main.ts',

  //entry: './src/sip/after/client_main.ts',
  //entry: './src/sip/after_change/client_main.ts',
  //entry: './src/sip/before/client_main.ts',
  entry: './src/sip/before_change/client_main.ts',
  
  output: {
	filename: 'app.js',
	path: path.resolve(__dirname, 'dist')
  },
  module:{
        loaders:[{
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

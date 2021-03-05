var path = require('path');
module.exports = {
    entry: './src/painter/painter_app.ts',
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

module.exports = {
    devtool: 'source-map',
    debug: true,
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        // .js is required for react imports.
        // .tsx is for our app entry point.
        // .ts is optional, in case you will be importing any regular ts files.
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        noParse: /node_modules\/json-schema\/lib\/validate\.js/,
        loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'],
            exclude: /node_modules/
        },  {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    },
    entry: {
        // Set index.tsx as application entry point.
        app: './src/index.tsx'
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    }
};
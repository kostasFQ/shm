var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: "./main.js",

    output: {
        filename: 'bundle.js',
    },

    module: {
        loaders: [{
            test: /\.js$/,
            loader: ['babel-loader'],
            exclude: /(node_modules)/
        },{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
        }]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]


};


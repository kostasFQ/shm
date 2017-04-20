var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    entry: "./main.js",

    output: {
        filename: './public/bundle.js',
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
        new ExtractTextPlugin('./public/bundle.css')
    ]


};

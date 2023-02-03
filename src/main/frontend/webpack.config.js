const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    // devtool: 'sourcemaps',
    // cache: true,
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',                    
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({ title: 'ReactJS + Spring Data REST',template: './src/index.html' })],
};
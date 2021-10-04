const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
        alias: {
            '@style': resolve('src/styles'),
            '@': resolve('src'),
        },
    },
    output: {
        path: resolve('dist/'),
        publicPath: '',
        filename: 'bundle.js',
    },
    devServer: {
        compress: true,
        port: 9000,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'My application',
            filename: 'index.html',
            template: 'public/index.html',
            inject: true,
        }),
    ],
};

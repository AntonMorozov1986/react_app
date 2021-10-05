const path = require('path');
const { DefinePlugin, HotModuleReplacementPlugin, ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appConfig = require('./src/global/app.config');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = {
    entry: './src/index.js',
    mode: appConfig('environment'),
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
            '@global': resolve('src/global'),
            '@components': resolve('src/components'),
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
        new HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: appConfig('name'),
            filename: 'index.html',
            template: 'public/index.html',
            inject: true,
        }),
        new DefinePlugin({
            ENVIRONMENT_MODE: JSON.stringify(process.env.NODE_ENV),
            IS_PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
            APP_NAME: JSON.stringify(appConfig('name')),
        }),
        new ProvidePlugin({
            PropTypes: 'prop-types',
        }),
    ],
};

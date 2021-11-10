require('dotenv').config();

const path = require('path');
const { DefinePlugin, HotModuleReplacementPlugin, ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const appConfig = require('./src/global/configs/app.config');

function resolve(dir) {
    return path.resolve(__dirname, dir);
}

module.exports = () => {
    return {
        entry: './src/index.js',
        mode: appConfig('environment'),
        output: {
            path: resolve('dist'),
            publicPath: '/',
            filename: 'bundle.js',
        },
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
                '@pages': resolve('src/pages'),
                '@components': resolve('src/components'),
                '@constants': resolve('src/global/constants'),
                '@configs': resolve('src/global/configs'),
                '@router': resolve('src/router'),
                '@store': resolve('src/store'),
                '@api': resolve('src/api'),
                '@tests':resolve('tests'),
            },
        },
        plugins: [
            new HotModuleReplacementPlugin(),
            new HtmlWebpackPlugin({
                title: appConfig('name'),
                filename: 'index.html',
                template: 'public/index.html',
                favicon: 'public/favicon.svg',
                inject: true,
            }),
            new DefinePlugin({
                ENVIRONMENT_MODE: JSON.stringify(process.env.NODE_ENV),
                IS_PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
                APP_NAME: JSON.stringify(appConfig('name')),
                API_BASE_URL: JSON.stringify(appConfig('api_url')),
                FIREBASE_CONFIG: JSON.stringify(appConfig('firebase_config')),
            }),
            new ProvidePlugin({
                PropTypes: 'prop-types',
            }),
        ],
        devServer: {
            compress: true,
            hot: true,
            host: appConfig('local_domain'),
            historyApiFallback: true,
        },
        devtool: 'eval-source-map',
    };
};

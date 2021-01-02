const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { CopyWebpackPlugin } = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    //точка входа
    mode: 'development', //может быть production - тогда bundle.js будет в 1 строку
    entry: {
        main: './index.js',
        analytics: './analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', 'json', '.png']
    },
    devServer: {
        port: 4200,
        open: true,
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src', to: 'dist' },

            ],
        }),


    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/,
                use: ['csv-loader']
            }
        ]
    }


}
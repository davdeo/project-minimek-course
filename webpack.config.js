const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx')
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Mini-Mek',
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ],
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        static: './dist'
    },
    resolve: {
        alias: {
            '@app': '/src/app',
            '@assets': '/src/assets',
            '@common': '/src/common',
            '@enums': '/src/enums',
            '@feature': '/src/feature',
            '@models': '/src/models',
            '@reducer': '/src/reducer',
            '@store': '/src/store',
        },
        extensions: ['.tsx', '.ts', '.js', '.json']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    }
};

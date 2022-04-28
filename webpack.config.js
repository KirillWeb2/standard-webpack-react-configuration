const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // мод
    mode: "development",
    // входной файл
    entry: "./src/index.tsx",
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.tsx', '.ts'],
    },
    output: {
        // выходная папка
        path: path.resolve(__dirname, 'dist'),
        // названия выходных файлов
        filename: "[name].[hash].js"
    },
    // порт сервера
    devServer: {
        port: 3000
    },
    // плагины
    plugins: [
        // создаёт html файл и переносит наш html файл
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
        // очищает старые файлыы
        new CleanWebpackPlugin()
    ],
    // модули
    module: {
        rules: [
            {
                test: /\.(css|s(a|c)ss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.png$/,
                use: ['file-loader']
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
        ]
    }
}
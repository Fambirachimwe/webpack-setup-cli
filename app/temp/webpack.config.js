const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        publicPath: '/assets'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                    }, "css-loader"
                ]
            },

            


        ]
    }, 
    plugins: [ new MiniCssExtractPlugin() ]
};



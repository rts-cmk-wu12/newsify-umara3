const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {

    entry: {
        index:'./src/index.js',
        home: './src/home.js',
        auth: './src/auth.js',
       
    },

    output: {
        clean: true,
        path: path.resolve(__dirname, 'docs'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'logo.html',
            template: './src/html/logo.html'
           
            
        }),

        new HtmlWebpackPlugin({
            filename: 'auth.html',

            template: './src/html/auth.html',
            chunks: ['auth']
        }),

        new HtmlWebpackPlugin({
            filename: 'home.html',

            template: './src/html/home.html',
            chunks: ['home']
        }),

        new HtmlWebpackPlugin({
            filename: 'setting.html',
            template:'./src/html/setting.html',
         
           }),
    ],
    module: {
        rules: [
            {

                test: /\.(s[ac]|c)ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",


                ],
            },
        ],
    },
}

module.exports = {
    resolve: {
        extensions: ['.es6.js', '.js', '']
    },

    entry: './app/scripts/index',

    output: {
        filename: './app/dist/game.js'
    },

    module: {
        loaders: [
            {
                test: /\.es6\.js$/,
                exclude: 'node_modules',
                loader: 'babel-loader'
            }
        ]
    }
};

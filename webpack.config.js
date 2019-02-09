const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    devtool: 'inline-source-map',
    mode: "development",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};
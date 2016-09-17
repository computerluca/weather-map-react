const webpack = require('webpack');
const path = require('path');

module.exports = {
    "entry": [
        'webpack-dev-server/client?https://0.0.0.0:8080',
        'webpack/hot/only-dev-server',
        './app/index.js'
    ],
    "output": {
        "path": path.join(__dirname, 'build'),
        "filename": "bundle.js"
    },
    devtool: "cheap-module-eval-source-map",
    "module": {
        "loaders": [
            {
                "test": /.js?$/,
                "loader": 'babel-loader',
                "exclude": /node_modules/
            },
            {
                
              "test":/\.css$/,loader:"style-loader!css-loader"  
            },
            {
                "test": /\.scss$/,
                "loaders": ["style", "css?sourceMap", "sass?sourceMap"]
            } 
        ]
    },
    devServer: {
        contentBase: './build',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
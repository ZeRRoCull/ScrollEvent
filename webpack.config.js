const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const development = require('./webpack/devserver');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const babel = require('./webpack/babel');

const PATHS = {
    source: path.join(__dirname,'src'),
    build: path.join(__dirname,'build')
};

const common = merge([
    {
        entry: PATHS.source + '/pages/index.js',
        output: {
            path: PATHS.build,
            filename: 'js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: PATHS.source + '/pages/index.pug'
            })
        ]
    },
    pug(),
    babel()
]);


module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            sass()
        ]);
    } else if (env === 'development') {
        return merge([
            common,
            development(),
            sass()
        ]);
    }
};
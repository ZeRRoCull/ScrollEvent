module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/,/build/],
                    loader: "babel-loader"
                }
            ]
        }
    }
};

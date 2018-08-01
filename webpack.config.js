module.exports = {
    entry: "./observable.js",
    output: {
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: 3000,
        hot: true
    },
    watch: true
}
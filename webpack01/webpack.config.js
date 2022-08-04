const path = require("path")

module.exports = {
    mode: "development",
    entry: {
        apps: "./src/index.js"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    }
}
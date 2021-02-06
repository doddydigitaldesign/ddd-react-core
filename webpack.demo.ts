import HtmlWebpackPlugin from "html-webpack-plugin";
import { resolve } from "path";
import { Configuration } from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";
import { merge } from "webpack-merge";
import common from "./webpack.common";

const webpackConfig: Configuration & DevServerConfig = merge(common, {
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "demo", "public", "index.html"),
        }),
    ],
    entry: {
        index: resolve(__dirname, "demo", "src"),
    },
    output: {
        path: resolve(__dirname, "demo", "build"),
        chunkFilename: (e) => (e.filename ? e.filename : "missingFileName"),
    },
});

export default webpackConfig;

import HtmlWebpackPlugin from "html-webpack-plugin";
import { join, resolve } from "path";
import { Configuration } from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";
import { merge } from "webpack-merge";
import common from "./webpack.common";

const webpackConfig: Configuration & DevServerConfig = merge(common, {
    entry: {
        index: resolve(__dirname, "demo", "src", "index.tsx"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, "demo", "public", "index.html"),
        }),
    ],
    devServer: {
        contentBase: join(__dirname, "build"),
        compress: true,
        port: 3000,
        hot: true,
    },
});

export default webpackConfig;

import { resolve } from "path";
import { Configuration } from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";
import { merge } from "webpack-merge";
import common from "./webpack.common";

const webpackConfig: Configuration & DevServerConfig = merge(common, {
    entry: {
        index: resolve(__dirname, "components", "index.tsx"),
    },
    output: {
        path: resolve(__dirname, "build"),
    },
});

export default webpackConfig;

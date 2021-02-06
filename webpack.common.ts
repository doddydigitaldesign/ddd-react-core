import { Configuration } from "webpack";
import { Configuration as DevServerConfig } from "webpack-dev-server";

const webpackConfig: Configuration & DevServerConfig = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".html", ".css"],
    },
};

export default webpackConfig;

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const merge = require("webpack-merge");
const webpackBase = require("./webpack.base")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackClient = {
	entry: "./src/client",
	devtool: "source-map",
	output: {
		filename: "js/bundle.[hash:5].js",
		path: __dirname + '/public',
		publicPath: "/"
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ['**/*', '!favicon.ico'],
		}),
		new MiniCssExtractPlugin({
			filename: "css/[name].[hash:5].css"
		})
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, "css-loader?modules"]
		}, {
			test: /\.(png)|(jpg)|(gif)$/,
			use: [{
				loader: "file-loader",
				options: {
					name: "image/[name].[hash:5].[ext]"
				}
			}]
		}]
	}
}

module.exports = merge(webpackBase, webpackClient);

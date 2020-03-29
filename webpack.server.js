const nodeexternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const webpackBase = require("./webpack.base")
const webpackServer = {
	entry: "./src/server",
	target: "node",
	output: {
		publicPath: "/"
	},
	externals: [nodeexternals()],
	module: {
		rules: [{
			test: /.css$/,
			use: ["isomorphic-style-loader", "css-loader?modules"]
		}, {
			test: /\.(png)|(jpg)|(gif)$/,
			use: [{
				loader: "file-loader",
				options: {
					name: "image/[name].[hash:5].[ext]",
					emitFile: false
				}
			}]
		}]
	}
}

module.exports = merge(webpackBase, webpackServer);
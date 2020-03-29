const path = require("path");
module.exports = {
	mode: "development",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, 'src')
		},
		extensions: ['.jsx', ".js", '.css']
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.jsx?/,
				exclude: /"node_modules"/,
				use: [{
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-react"]
					}
				}]
			}
		]
	}
}
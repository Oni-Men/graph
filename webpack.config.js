const path = require("path");
const built = path.resolve(__dirname, "built");

module.exports = {
	mode: "development",
	entry: "./src/main.js",
	output: {
		filename: "built.js",
		path: `${built}/`,
	},
	module: {
		rules: [
			{
				test: /\.js/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".js"],
	},
	devServer: {
		contentBase: `${built}/`,
		open: true,
		hot: true,
		watchContentBase: true,
	},
};

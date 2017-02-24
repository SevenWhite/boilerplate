var path = require('path');

module.exports = {
	entry: "./src/front/index.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/public/js"
	},
	devtool: "source-map",
	resolve: {
		extensions: [".ts", ".tsx", ".js"]
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				include: [
					path.resolve(__dirname, "src", "front")
				],
				loader: "awesome-typescript-loader"
			},
			{
				test: /\.js$/,
				enforce: "pre",
				loader: "source-map-loader"
			}
		]
	}
	// externals: {
	// 	"react": "React",
	// 	"react-dom": "ReactDOM"
	// }
};
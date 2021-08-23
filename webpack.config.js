const path = require('path')

const basePath = __dirname
const publicPath = 'public'

module.exports = {
	mode: 'production',
	entry: {
		app: './src/index.js',
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
		],
	},
	output: {
		path: path.join(basePath, publicPath),
		filename: 'bundle.js',
	},
}

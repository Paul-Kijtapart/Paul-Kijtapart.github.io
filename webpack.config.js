const path = require('path');
const webpack = require('webpack');
const gutil = require("gulp-util");

const SRC = path.resolve(__dirname, 'src');
const PUBLIC = path.resolve(__dirname, 'public');
const NODE_MODULES = path.resolve(__dirname, 'node_modules');

module.exports = {
	entry: path.join(SRC, 'js', 'index.js'),
	output: {
		filename: 'index.js',
		path: PUBLIC
	},
	watch: true,
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: [NODE_MODULES],
			use: [{
				loader: 'babel-loader'
			}]
		}, {
			test: /\.json$/,
			use: [{
				loader: 'json-loader'
			}]
		}]
	},
	resolve: {
		modules: [
			path.join(SRC, 'js'),
			path.resolve(__dirname, 'scripts'),
			SRC,
			NODE_MODULES
		]
	},
	devtool: 'source-map'
};
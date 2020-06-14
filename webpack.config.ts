const webpack = require('webpack');
const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
	entry: ["./src/index.tsx"],
	mode: "development",
	output: {
		filename: "assets/bundle.[contenthash].js",
		path: "/public"
	},

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
		plugins: [
			new TsconfigPathsPlugin()
		]
	},

	module: {
		rules: [{
			test: /\.ts|.tsx?$/,
			loader: 'ts-loader',
			options: {
			  transpileOnly: true
			}
		}, {
				test: /\.(woff(2)?|ttf|eot|otf|png|jpg|gif|svg|ogg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
					publicPath: './assets',
					outputPath: './assets'
				}
			}, {
				test: /\.css$/,
				loader: "style-loader!css-loader"
			}
		]
	},

	optimization: {
		splitChunks: {
			chunks: 'all',
		}
	},
	
	devServer: {
		publicPath: '/public',
		contentBase: path.resolve(__dirname, "./src"),
		watchContentBase: true,
		compress: false,
		port: 8081,
		watchOptions: {
			aggregateTimeout: 600,
			ignored: [
				'node_modules',
				'dist'
			]
		}
	},

	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				API_URL: JSON.stringify(process.env.API_URL || "http://localhost:4000")
			}
		}),
		new HtmlWebpackPlugin({
			template: './public/index.template.html'
		}),
		new ForkTsCheckerWebpackPlugin()
	]
};
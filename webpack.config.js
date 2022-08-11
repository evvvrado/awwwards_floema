const path = require('path')
const webpack = require('webpack')


const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')


const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const dirApp = path.join(__dirname, 'app')
const dirShared = path.join(__dirname, 'shared')
const dirImages = path.join(__dirname, 'images')
const dirStyles = path.join(__dirname, 'styles')

const dirNode = 'node_modules'

module.exports = {
	entry: [
		path.join(dirApp, 'index.js'),
		path.join(dirStyles, 'index.scss'),
	],

	resolve: {
		modules: [
			dirApp,
			dirStyles,
			dirImages,
			dirShared,
			dirNode
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			IS_DEVELOPMENT
		}),


		// new webpack.ProvidePlugin({
		// IMPORTA GLOBALMENTE
		// })

		new CopyWebpackPlugin({
			patterns: [
				{
					from: './shared',
					to: ''
				}
			]
		}),

		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[id].css'
		}),

		new ImageMinimizerPlugin({
			minimizer: {
				implementation: ImageMinimizerPlugin.imageminMinify,
				options: {
					// Lossless optimization with custom option
					// Feel free to experiment with options for better result for you
					plugins: [
						["gifsicle", { interlaced: true }],
						["jpegtran", { progressive: true }],
						["optipng", { optimizationLevel: 5 }],
					],
				},
			},
		})

	],


	module: {
		rules: [
			{
				test: /\.js$/,
				use: {
					loader: 'babel-loader'
				}
			},

			{
				test: /\.scss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							publicPath: ''
						}
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'postcss-loader',
					},
					{
						loader: 'sass-loader'
					}
				]
			},

			{
				test: /\.(jpe?g|png|gif|svg|woff2?|fnt|webp)$/,
				loader: 'file-loader',
				options: {
					outputPath: 'images',
					name(file) {
						return '[hash].[ext]'
					}
				}
			},
			{
				test: /\.(jpe?g|png|gif|svg|webp)$/i,
				use: [
					{
						loader: ImageMinimizerPlugin.loader
					}
				]
			},

			{
				test: /\.(glsl|frag|vert)$/,
				loader: 'raw-loader',
				exclude: /node_modules/
			},

			{
				test: /\.(glsl|frag|vert)$/,
				loader: 'glslify-loader',
				exclude: /node_modules/
			}
		]
	},

	optimization: {
		minimize: true,
		minimizer: [new TerserPlugin()]
	}
}
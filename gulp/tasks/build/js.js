'use strict';

var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');

var configWebpack = { 
	mode: 'production',
	output: {
		filename: 'app.js',
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
	module: {
		loaders: [
		  {
			test: /\.jsx?$/,
			loader: 'babel',
			exclude: /node_modules/,
			query: {
			  cacheDirectory: true,
			  presets: ['react', 'es2015']
			}
		  }
		]
	}
}


// Copy js to distribution folder.
// 
// Tasks
// 'gulp dist:js' : main js task
module.exports = function(gulp, $, path, config) {
	gulp.task( 'dist:js', function(){
		return gulp.src(path.js.src)
			.pipe($.plumber({
				errorHandler : config.error
			}))

			.pipe(gulpWebpack( configWebpack, webpack ))
			
			.pipe(gulp.dest(path.js.build.dist));
	});
}

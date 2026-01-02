'use strict';

var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');

var configWebpack = { 
	mode: 'development',
	output: {
		filename: 'app.js',
	},
	module: {
		rules: [
		  {
			test: /\.(js|jsx)$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			query: {
			  presets: [
				['es2015','react'],
			  ]
			},
		  },
		],
	  },
	plugins: [
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		})
	],
}

// Compile SASS to CSS
module.exports = function(gulp, $, path, config) {
	gulp.task( 'webpack:js', function(){
		return gulp.src(path.js.src)
			// Initialize sourcemaps

			// Handle errors
			.pipe($.plumber({
				errorHandler : config.error
			}))


			// Start sass compile
			.pipe(gulpWebpack( configWebpack, webpack ))

			.pipe($.sourcemaps.init({ loadMaps: true }))
			// .pipe( $.autoprefixer( config.sass.autoprefixer ))

			// write sourcemaps
			.pipe($.sourcemaps.write('./_maps'))

			// .pipe($.autoprefixer())
			
			//save compiled files
			.pipe(gulp.dest(path.js.build.dev))

			.pipe($.browserSync.stream());
	});
}

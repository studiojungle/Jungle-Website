'use strict';

// Compile SASS to CSS
module.exports = function(gulp, $, path, config) {
	gulp.task( 'sass', function(){
		return gulp.src(path.sass.src)
			// Initialize sourcemaps
			.pipe($.sourcemaps.init())

			// Handle errors
			.pipe($.plumber({
				errorHandler : config.error
			}))

			// Start sass compile
			.pipe($.sass(
				config.sass.options
				))

			.pipe( $.autoprefixer( config.sass.autoprefixer ))

			// write sourcemaps
			.pipe($.sourcemaps.write('./_maps'))

			// .pipe($.autoprefixer())
			
			//save compiled files
			.pipe(gulp.dest(path.sass.build.dev))

			.pipe($.browserSync.stream());
	});
}
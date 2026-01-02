// ./gulp/tasks/css,js
'use strict';

// Tasks
// 'gulp dist:css' : main css task
// 
//  Plugins: 
// gulp-cssnano: 	$.cssnano
// gulp-strip-css-comments : $.stripCssComments
// gulp-css-beautify: $.cssBeautify
// gulp-rename: $.rename
// 
module.exports = function(gulp, $, path, config) {
	gulp.task( 'dist:css', function(){
		return gulp.src(path.sass.build.dev + '/*.css')

			.pipe($.plumber({
				errorHandler : config.error
			}))

			// Strip unimportant css comments
			.pipe($.stripCssComments(
				config.css.stripCommentsOptions
			))

			// beautify final css code
            .pipe($.cssbeautify(
                config.css.cssbeautifyOptions
            ))

            // Save unminified file
            .pipe(gulp.dest(path.sass.build.dist))

            // Minify CSS
			.pipe($.cssnano())

			// Rename minified CSS
			.pipe($.rename(
				config.css.renameOptions
			))

			.pipe(gulp.dest(path.sass.build.dist))
	})
}
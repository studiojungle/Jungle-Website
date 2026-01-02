'use strict';

module.exports = function(gulp, $, path, config) {
	gulp.task( 'dist:html', function(){

		return gulp.src(path.html.src)
			.pipe($.plumber({
				errorHandler : config.error
			}))

			.pipe(gulp.dest(path.build.dist));
	});
}
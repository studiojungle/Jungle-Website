'use strict';

module.exports = function(gulp, $, path, config) {
	gulp.task( 'dist:images', function(){
		return gulp.src(path.images.src)

            // Only pass through the changed files
		.pipe($.changed(path.images.build.dist))

            // Minify images
            .pipe($.imagemin(
            	config.images.imageminOptions
            ))

            // Save images
            .pipe(gulp.dest(path.images.build.dist));
	});
}
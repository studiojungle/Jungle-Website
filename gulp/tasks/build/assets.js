'use strict';

module.exports = function(gulp, $, path, config) {
	gulp.task( 'dist:assets', function(){
		return gulp.src(path.assets.src)

        // Only pass through the changed files
		.pipe($.changed(path.assets.dist))

        // Save images
        .pipe(gulp.dest(path.assets.dist));
	});
}
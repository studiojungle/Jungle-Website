'use strict';

module.exports = function(gulp, $, path, config) {
	gulp.task( 'assets', function(){
		return gulp.src(path.assets.src)

        // Only pass through the changed files
		.pipe($.changed(path.assets.serve))

        // Save images
        .pipe(gulp.dest(path.assets.serve));
	});
}
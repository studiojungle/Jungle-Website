'use strict';

// Copy fonts to distribution folder.
// 
// Tasks
// 'gulp dist:fonts' : main fonts task
module.exports = function(gulp, $, path, config) {
	gulp.task( 'dist:fonts', function(){
		return gulp.src(path.fonts.src)
			.pipe($.plumber({
				errorHandler : config.error
			}))
			
			.pipe(gulp.dest(path.fonts.build.dist));
	});
}
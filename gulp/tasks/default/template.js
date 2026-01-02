'use strict';

module.exports = function(gulp, $, path, config) {

	// Render only for temaplte files
	// This task is same as task nunjucks but this task do not look for the file
	// changes. Since templates are not rendered to HTML, the changes in the 
	// template files are not reflected in during the page reload.
	gulp.task( 'template:template', function(){
		return gulp.src(path.template.pages)
			.pipe($.plumber({
				errorHandler : config.error
			}))

			// Render templates
			.pipe($.twig( config.template ))

			// Save files
			.pipe(gulp.dest(path.template.build.dev))

			// Update browser
			.pipe($.browserSync.stream());
	});


	gulp.task( 'template', function(){
		return gulp.src(path.template.pages)

			.pipe($.changed(path.template.build.dev, config.changed.nunjucks))

			// Handle errors
			.pipe($.plumber({
				errorHandler : config.error
			}))

			// Render templates
			.pipe($.twig( config.template ))

			// Save files 
			.pipe(gulp.dest(path.template.build.dev))

			// Update browser
			.pipe($.browserSync.stream());
	});
}
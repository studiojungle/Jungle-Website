'use strict';

var gulp   =	require('gulp'),
	path   = 	require('./gulp/paths.js'),
	config =	require('./gulp/config.js');

var $ = require('gulp-load-plugins')({
	// used for all plugins type not just with gulp-*
	pattern: '*'
});

$.loadSubtasks('./gulp/tasks/**/*.js', $, path, config);

// Default task
gulp.task( 'default', gulp.series(
	gulp.parallel(
		gulp.series ( 'assets',
		'template',
		'template:template',
		'sass', 
		'webpack:js',
		'browsersync'),
	'watch')
 ) );

// Distribution task
gulp.task( 'dist', gulp.series(
	'dist:html',
	'dist:html',
	'dist:assets',
	'dist:css',
	'dist:js'
 ) );
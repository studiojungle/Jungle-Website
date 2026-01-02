'use strict';

module.exports = function(gulp, $, path, config) {

	var changeListener = function(path){
		// console.log( path + ' changed.')
        $.util.log( $.util.colors.yellow( path ) + ' changed.' );
	}

    gulp.task('watch', function() {
        
        var sass = gulp.watch( path.sass.src, config.watch, gulp.series('sass') );

        var template = gulp.watch( path.template.watch.pages,  config.watch, gulp.series('template' ) );

        var template_template = gulp.watch( path.template.watch.templates,  config.watch, gulp.series('template:template' ) ); 

        var js = gulp.watch( path.js.watch,  config.watch, gulp.series('webpack:js' ));      
        
        var assets = gulp.watch( path.assets.watch, config.watch, gulp.series('assets' ));
        
    } );
};

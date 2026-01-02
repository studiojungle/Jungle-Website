'use strict';

module.exports = function(gulp, $, path, config) {

    gulp.task('browsersync', function() {
        $.browserSync(
            config.serve.dev
        )
    });

    gulp.task('browsersync' + ':dist', function() {
        $.browserSync(
            config.serve.dist
        )
    });
};
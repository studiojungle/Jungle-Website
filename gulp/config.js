'use strict';

var path = require('./paths.js'),
	pngquant = require('imagemin-pngquant'),
	gutil = require('gulp-util');

module.exports = {
	serve: {
		dev: {
			server: {
				baseDir: path.serve.dev
			},
			open: false,
			scrollThrottle: 1000,
			reloadDelay: 500,
			reloadDebounce: 500,
			reloadThrottle: 500,
			browser: 'google chrome'
		},
		dist: {
			server: {
				baseDir: path.serve.dist
			},
			browser: 'google chrome'
		}
	},

	watch: {
		interval: 250,
		delay: 500,
		ignoreInitial: true,
		cwd: __dirname + '/../'
	},

	sass: {
		options: {
			outputStyle: 'expanded',
			includePaths: ['node_modules/bootstrap/scss']
		}
	},

	// webpack: require( './webpack.config' ),

	images: {
		 imageminOptions: {
            optimizationLevel: 7,
            progressive: true,
            interlaced: true
        }
	},

	autoprefixer: {
	    browsers: ['last 4 versions']
	},

	css: {
		// srtip css comments options
        stripCommentsOptions: {
            preserve: true
        },

        // cssbeautify options
        cssbeautifyOptions: {
            indent: '  '
        },

        // rename options
        renameOptions: {
            suffix: '.min'
        }
	},

	changed : {
		nunjucks : {
			extension : '.html'
		}
	},

	template : {
		base: path.template.paths,
		filters: [
			{
				name: 'assets_url',
				func: function( args ) {
					return path.assets.basePath + '/' + args;
				}
			},
			{
				name: 'image_assets_url',
				func: function(args) {
					return path.assets.images + '/' + args;
				}
			}
		]
	},


    // error handler
    error: function(error) {
        // output an error message
        gutil.log(
            gutil.colors.red(
                '\n\------------------------------\n\Error in plugin (' + gutil.colors.green(error.plugin) + '):\n\ ' + gutil.colors.blue(error.message) + '------------------------------'
            )
        );
        // emit the end event, to properly end the task
        this.emit('end');
    }
}

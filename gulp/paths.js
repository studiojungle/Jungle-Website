'use strict';

// Base paths
var app	 	=	 './app/',
	dist 	= 	 './dist/',
	dev 	=	 app,
	serveDir   =	 './serve/';


// Main paths
module.exports = {
	build : {
		dist : dist,
		dev : app
	},

	serve : {
		dist : dist,
		dev : serveDir
	},

	sass : {
		src : [
			dev + 'scss/**/*.{sass,scss}'
		],

		build : {
			dev: serveDir,
			dist: dist
		}
	},

	images : {
		src : serveDir + 'images/*',

		build : {
			dev: serveDir + 'images',
			dist: dist + 'images'
		}
	},

	js : {
			src : dev + 'js/*',
			watch: dev + 'js/*',
			build : {
				dev: serveDir +'js',
				dist: dist + 'js'
			}
		},

	fonts : {
		src : serveDir + 'fonts/**/*',

		build : {
			dev: serveDir + 'fonts',
			dist: dist + 'fonts'
		}
	},

	template : {
		src : app + 'html/views/**/*.{html,nunjucks,twig}',
		templates: app + 'html/views/{components,partials,layouts}',
		pages : app + 'html/views/**/*.{html,nunjucks,twig}',
		paths: [app + 'html/'],

		watch : {
			pages : app + 'html/views/**/*.{html,nunjucks,twig}',
			templates :  app + 'html/{components,partials,layouts}/*.{html,nunjucks,twig}'
		},
		
		build : {
			dev : serveDir,
			dist: dist
		}
	},

	html : {
		src : serveDir + '**/*.html'
	},

	assets: {
		src: app + 'assets/**/*',
		watch:  app + 'assets/**/*',
		dist: dist,
		serve: serveDir,
		basePath: '',
		images: 'images'
	}
}

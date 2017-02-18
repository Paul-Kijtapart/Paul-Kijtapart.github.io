const gulp = require('gulp');
const webpack = require("webpack");
const compass = require('gulp-compass');
const gutil = require('gulp-util');
const path = require('path');

// Paths
const SRC = path.resolve(__dirname, 'src');
const PUBLIC = path.resolve(__dirname, 'public');
const WEBPACK_CONFIG_PATH = path.resolve(__dirname, 'webpack.config.js');
const COMPASS_CONFIG_PATH = path.resolve(__dirname, 'config.rb');
const SCRIPT_PATHS = path.join(SRC, '/**/*.js');
const STYLE_PATHS = path.join(SRC, '/**/*.scss');

// JS
gulp.task('js', function() {
	webpack(require(WEBPACK_CONFIG_PATH),
		function(err, stats) {
			if (err) throw new gutil.PluginError("webpack", err);
			gutil.log("[webpack]", stats.toString({
				// output options
			}));
		});
});

// cSS
gulp.task('css', function() {
	gulp.src(path.join(SRC, 'sass', 'index.scss'))
		.pipe(compass({
			config_file: COMPASS_CONFIG_PATH,
			css: PUBLIC,
			sass: path.join(SRC, 'sass')
		}))
		.pipe(gulp.dest(PUBLIC))
});

gulp.task('compile', ['css', 'js']);
gulp.task('watch', function() {
	gulp.watch(SCRIPT_PATHS, ['js']);
	gulp.watch(STYLE_PATHS, ['css']);
});
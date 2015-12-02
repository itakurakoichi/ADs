/**
 * @Comment
 * 2015.11.11
 *    TODO
 *    src/__AD_PATTERN_NAME__/stylus/hoge.styl
 *    dist/__AD_PATTERN_NAME__/css/hoge.css
 *    へ配布
 *       gulp-flatten https://www.npmjs.com/package/gulp-flatten 要対応
 */

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var plumber = require('gulp-plumber');
// compile
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
// compress
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
// check
var htmlhint = require('gulp-htmlhint');
var csslint = require('gulp-csslint');

gulp.task('html', function() {
	gulp.src('./src/**/*.jade')
		.pipe(plumber())
		.pipe(jade({ pretty: true }))
		.pipe(htmlhint())
		.pipe(htmlhint.reporter())
		.pipe(gulp.dest('./src/'))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('css', function() {
	gulp.src('./src/**/css/*.styl')
		.pipe(plumber())
		.pipe(stylus())
		.pipe(csslint())
		.pipe(csslint.reporter())
		.pipe(gulp.dest('./src'))
		.pipe(minifycss())
		.pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
	gulp.src('./src/**/js/*.js')
		.pipe(plumber())
		.pipe(uglify())
		.pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
	gulp.watch('./src/**/*.jade', ['html']);
	gulp.watch('./src/**/css/*.styl', ['css']);
	gulp.watch('./src/**/js/*.js', ['js']);
});

gulp.task('webserver', function() {
	gulp.src('./src')
		.pipe(
			webserver({ livereload: true })
		);
});

gulp.task('default', ['html', 'css', 'js', 'watch', 'webserver']);

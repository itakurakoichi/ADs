/**
 * @Comment
 * 2015.11.10
 *    画像最適化（gulp-imagemin）は不要だがinstallのみdone
 * 2015.11.11
 *    本番配布時にのみ、js, css, htmlの圧縮を行う、が相応しいか。（gulp dist 等のタスクに割り当てる）
 *    通常のdefault時（gulp）は圧縮以外を行う。
 *       当projectはmock作成用なので、そもそも圧縮は不要だが。
 * 2015.11.11
 *     src/__AD_PATTERN_NAME__/stylus/hoge.styl を
 *    dist/__AD_PATTERN_NAME__/css/hoge.css として配布したい。
 *       現状、css/hoge.styl として、css/hoge.css へ配布している。
 *          ディレクトリ構成に拘らなければ上記でも良いが。
 */

var gulp = require('gulp');
var plumber = require('gulp-plumber');

var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
// var minifycss = require('gulp-minify-css');
// var uglify = require('gulp-uglify');

gulp.task('html', function() {
	gulp.src('./src/**/*.jade')
		.pipe(plumber())
		.pipe(jade({ pretty: true }))
		// # 開発用配布
		.pipe(gulp.dest('./src/'))
		// # 本番配布
		// .pipe(gulp.dest('./dist/'))
});

gulp.task('css', function() {
	gulp.src('./src/**/css/*.styl')
		.pipe(plumber())
		.pipe(stylus())
		// # 開発用配布
		.pipe(gulp.dest('./src'));
		// # 本番配布: ミニファイし、本番配布
		// .pipe(minifycss())
		// .pipe(gulp.dest('./dist'));
});

gulp.task('js', function() {
	gulp.src('./src/**/js/*.js')
		.pipe(plumber())
		// # 本番配布: 圧縮後に配布
		// .pipe(uglify())
		// .pipe(gulp.dest('./dist/'));
});

gulp.task('watch', function() {
	gulp.watch('./src/**/*.jade', ['html']);
	gulp.watch('./src/**/css/*.styl', ['css']);
	gulp.watch('./src/**/js/*.js', ['js']);
});

gulp.task('default', ['html', 'css', 'js', 'watch']);
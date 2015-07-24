// Plugins
var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
	jsmin = require('gulp-jsmin'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	rename = require('gulp-rename');

// Path
var pathSourceCSS = '<PATHSOURCECSS>',
	pathDistCSS = '<PATHDISTCSS>',
	pathSourceJS = '<PATHSOURCEJS>',
	pathDistJS = '<PATHDISTJS>',
	pathSourceSASS = '<PATHSOURCESASS>';

// Tarefas
gulp.task('cssmin', function(){
	gulp.src(pathSourceCSS)
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(pathDistCSS));
});

gulp.task('jsmin', function(){
	gulp.src(pathSourceJS)
        .pipe(jsmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(pathDistJS));
});

gulp.task('sass', function () {
	gulp.src(pathSourceSASS)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(pathSourceCSS));
});

gulp.task('watch', ['cssmin', 'jsmin']);

gulp.task('default', ['cssmin', 'jsmin'], function(){

	gulp.watch(pathSourceCSS, ['cssmin']);
	gulp.watch(pathSourceJS, ['jsmin']);

});
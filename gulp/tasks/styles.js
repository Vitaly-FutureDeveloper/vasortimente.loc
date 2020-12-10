//const  = require('');
const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const shorthand = require('gulp-shorthand');
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const cleanCss = require('gulp-clean-css');
const cssbeautify = require('gulp-cssbeautify');

module.exports = function styles(cb){
	return gulp.src("src/styles/*.scss")
	.pipe(plumber())
	.pipe(sass())
	.pipe(shorthand())
	.pipe(autoprefixer())
	.pipe(cleanCss())
	.pipe(sourcemaps.init())
	.pipe(cssbeautify({
		indent: '	',
		openbrace: 'separate-line',
		autosemicolon: true
	}))
	.pipe(gulp.dest("build/css"));
}
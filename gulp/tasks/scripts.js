//const  = require('');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const eslint = require('eslint');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const concat = require('gulp-concat');

var concatOption = require('../../src/scripts/main.js');

module.exports = function scripts(cb){
	gulp.src(concatOption).on('data', function(file){ console.log(file);})
		.pipe(plumber())
		.pipe(concat('main.js'))
		//.pipe(eslint())
		//.pipe(eslint.format())
		//.pipe(sourcemaps.init())
		/*.pipe(babel({
			presets: ['@babel/env']
		}))
		.pipe(terser())
		.pipe(sourcemaps.write())*/
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest('build/js'))
	return cb()
}
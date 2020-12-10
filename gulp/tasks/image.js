//const  = require('');
const gulp = require('gulp');
const image_minify = require('gulp-imagemin');
const svgstore = require('gulp-svgstore');
const webp = require('gulp-webp');
const rename = require('gulp-rename');

const objImager = {

	minify(){
		return gulp.src('src/img/**/*.{png,jpg,svg}')
		.pipe(image_minify([
			image_minify.mozjpeg({quality: 75, progressive: true}),
			image_minify.optipng({optimizationLevel: 3})
		]))
		.pipe(gulp.dest('./build/img'))
	},

	webp(){
		return gulp.src('src/img/**/*.{png,jpg}')
		.pipe(webp({quality: 80}))
		.pipe(gulp.dest('./build/img'))
	},

	sprite(){
		return gulp.src('src/img/sprite/**/*.svg')
			.pipe(svgstore({inlinesvg: true}))
			.pipe(rename('sprite.svg'))
			.pipe(gulp.dest('./build/img/sprite'))
	}

};

module.exports = objImager;
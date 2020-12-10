//const  = require('');
const gulp = require('gulp');
const del = require('del');

module.exports = function clean(folder) {
	console.log('Worked clean ' + folder);
	return del(folder);
};
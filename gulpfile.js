let gulp = require('gulp');
let sass = require('gulp-sass');


// Test task
gulp.task('test', () => {
	console.log("Gulp working!");
	console.log("Celebrating!");
});


// Run gulp sass for home project
gulp.task('sass', () => {
	gulp.src('./src/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
});
gulp.task('sass:watch', () => {
	gulp.watch('./src/scss/*.scss', ['sass']);
});


// Run gulp sass for Admixer project
gulp.task('sass-admixer', () => {
	gulp.src('../15_Admixer/Test Front-end/css_test/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('../15_Admixer/Test Front-end/css_test'));
});
gulp.task('sass:watch-admixer', () => {
	gulp.watch('../15_Admixer/Test Front-end/css_test/*.scss', ['sass-admixer']);
});



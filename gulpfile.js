let gulp = require('gulp');
let sass = require('gulp-sass');


gulp.task('test', () => {
	console.log("Gulp working!");
	console.log("Celebrating!");
});


gulp.task('sass', () => {
	gulp.src('./src/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
});
gulp.task('sass:watch', () => {
	gulp.watch('./src/scss/*.scss', ['sass']);
});



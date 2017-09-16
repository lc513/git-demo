var gulp = require('gulp');
var gulp_less = require('gulp-less');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', function() {
  // �����Ĭ�ϵ�������������
  console.log(1);
});
gulp.task('copy', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('disk/'));
	gulp.src('less/less.less')
		.pipe(gulp_less())
		.pipe(gulp.dest('disk/'));
});
gulp.task('watch',function(){
	gulp.watch('src/index.html',['copy']);
	gulp.watch('less/less.less',['copy']);
});
// ����һ����̬��������ͬ��

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
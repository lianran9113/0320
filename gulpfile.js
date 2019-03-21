//导入所需插件 
const gulp = require('gulp'),
	  uglify = require('gulp-uglify'),
	  rename = require('gulp-rename'),
	  concat = require('gulp-concat');
	  sass = require('gulp-sass');
	  
//发布任务
gulp.task('test',function(){
	console.log('测试任务');
})
//处理js任务
gulp.task('js',function(){
	gulp.src('./src/ES5JS/*.js')
	.pipe(uglify())
	.pipe(rename({"suffix" : ".min"}))
	.pipe(concat('main.min.js'))
	.pipe(gulp.dest('./dist'));
})

gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css'))
})
//发布自动监听任务
gulp.task('default',function(){
	gulp.watch(['./src/ES5JS/*.js'],['js']);
})
 
gulp.task('default',function(){
	gulp.watch(['./src/sass/*.scss'],['sass']);
})
 
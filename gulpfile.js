/// <binding AfterBuild='build' />
var KarmaServer = require('karma').Server,
    gulp = require('gulp'),
		jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),
		concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
		uglify = require('gulp-uglify');

gulp.task('testrun', function (done) {
  return new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    browsers : ['PhantomJS'],
    singleRun : true
  }, done).start();
});

gulp.task('test', function (done) {
  return new KarmaServer({
    configFile: __dirname + '/karma.conf.js',
    action: 'watch'
  }, done).start();
});

gulp.task('clean', function(){
	return gulp.src('Dist').pipe(clean());
});

gulp.task('copy', ['clean'], function(){
	gulp.src('node_modules/angular/angular.min.js')
      .pipe(gulp.dest('Dist/js/lib'));
  gulp.src('src/app/*.css')
      .pipe(minifyCss())
      .pipe(gulp.dest('Dist/css'));
  gulp.src('src/app/*.html')
      .pipe(gulp.dest('Dist/'));
});

gulp.task('build', ['copy', 'testrun'], function() {
	return gulp.src(['src/app/modules/*.js', 'src/app/Services/*.js', 'src/app/controllers/*.js'])
  		.pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('Dist/js'));
});

gulp.task('watch', function(){
  gulp.watch(['Tests/**/*.js','Src/**/*.*', 'gulpfile.js', 'karma.conf.js'], ['build']);
});

gulp.task('default', function (done) {
});

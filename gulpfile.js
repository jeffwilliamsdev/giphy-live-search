var gulp         = require('gulp'),
    sass         = require('gulp-sass'),
    plumber      = require('gulp-plumber'),
    uglify       = require('gulp-uglify'),
    bs           = require('browser-sync'),
    rename       = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    webpack      = require('gulp-webpack'),
    webp         = require('gulp-webp'),
    reload       = bs.reload,
    nodemon      = require('gulp-nodemon');

function errorHandler(err) {
    console.log(err.toString() );
    this.emit('end');
}

gulp.task('webp', function() {
    return gulp.src('img/*.jpg')
               .pipe(webp())
               .pipe(gulp.dest('img/webp'))
 })

gulp.task('sass', function() {
    return gulp.src('./src/*.scss')
      .pipe(plumber())
      .pipe(sass.sync({
          outputStyle : 'compressed',
          errLogToConsole : true
      }))
      .pipe(autoprefixer())
      .pipe(gulp.dest('./dist/') )
      .pipe(bs.reload({ stream: true }))
})

gulp.task('webpack', function() {
    console.log('---- WEBPACK RUNNING ----')
    return gulp.src('./client.js')
      .pipe(webpack( require('./webpack.config.js') ))
      .pipe(gulp.dest('./dist'))
      .pipe(bs.reload({stream : true }));
})

gulp.task('js', ['webpack'], function() {
    console.log('---- JS RUNNING ----')
	// return gulp.src('src/**/*.js')
    //      	.pipe(plumber())
    //         .on('error', errorHandler)
    //     	.pipe(uglify())
    //     	.pipe(rename({
    //     		suffix: '.min'
    //     	}))
    //     	.pipe( bs.reload({ stream: true }))
})

gulp.task('browserSync', ['nodemon'], function() {
    //watch files
    var files = [
    'dist/style.css',
    '**/*.php'
    ];

    //initialize browsersync
    bs.init(files, {
        proxy: "http://localhost:8081",
        notify: false,
        reloadDelay: 1200
    });
});

gulp.task('nodemon', function() {
    return nodemon({
        script: 'server.js'
    })
});

gulp.task('watch', function() {
	gulp.watch('./src/**/**/*.js', ['js']);
	gulp.watch('./src/**/**/*.scss', ['sass']);

})

 gulp.task('default', ['watch', 'browserSync']);

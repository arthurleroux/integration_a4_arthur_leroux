"use strict";

let gulp = require("gulp");
let p = require('gulp-load-plugins')();
const production = !!p.util.env.production;

gulp.task('sass', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(p.sourcemaps.init())
        .pipe(p.sass().on('error', p.sass.logError))
        .pipe(p.sourcemaps.write())
        .pipe(p.if(production, p.cleanCss({compatibility: 'ie9'})))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', ["sass"], function () {
    gulp.watch('./scss/**/*.scss', ['sass']);
});

gulp.task("default", ["sass"]);
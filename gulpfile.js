var gulp = require("gulp");
var less = require("gulp-less");
var cssnano = require("gulp-cssnano");
var uglify = require("gulp-uglify");
var htmlmin = require("gulp-htmlmin");
var browsersync = require("browser-sync");

gulp.task("style",function() {
   gulp.src(["src/style/*.less","!src/style/_*.less"])
   .pipe(less())
   .pipe(cssnano())
   .pipe(gulp.dest("dist/style"));
});

gulp.task("js",function(){
    gulp.src("src/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("html",function(){
    gulp.src("src/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist"));
});

gulp.task("serve",function () {
    browsersync({server: {
        baseDir:'dist/'
    }}, function(err, bs) {
        console.log(bs.options.getIn(["urls", "local"]));
    });
})
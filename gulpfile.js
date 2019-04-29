var gulp = require("gulp")
var gulp_sass = require("gulp-sass")
var gulp_ejs = require("gulp-ejs")
var gulp_rename = require("gulp-rename")
// var del = require("del")

gulp.task("ejs",function(done){
    gulp.src("./src/ejs/*.ejs")
    .pipe(gulp_ejs())
    .pipe(gulp_rename({
        extname: '.html'
    }))
    .pipe(gulp.dest("./dist"))
    done();
})
// gulp.task("del",function(done){
//     del("./dist")
//     done();
// })
gulp.task("sass",function(done){
     gulp.src("./src/sass/*.scss")
    .pipe(gulp_sass({outputStyle: "expanded"}))
    .pipe(gulp.dest('./dist/css'))
    done();
})
gulp.task('default', gulp.series("ejs","sass",function(done){
    done();
}))

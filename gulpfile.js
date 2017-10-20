var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require('gulp-sourcemaps');

gulp.task("sass", function(e) {
return gulp.src("sass/style.scss").pipe(sourcemaps.init()).pipe(sass({outputStyle: "extended"})).pipe(sourcemaps.write()).pipe(gulp.dest("css/style.css"));
});

gulp.task("watch", function(e) {
gulp.watch("sass/**/*.scss", ["sass"]);
});

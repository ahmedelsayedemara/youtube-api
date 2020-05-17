var gulp = require("gulp");
var sass = require("gulp-sass");
var cleanCSS = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");
var concat = require("gulp-concat");

gulp.task("styles", () => {
  return gulp
    .src("./src/assets/sass/styles.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(autoprefixer())
    .pipe(concat("styles.scss"))
    .pipe(gulp.dest("./src/dist/"));
});

gulp.task("watch", () => {
  gulp.watch("./src/assets/sass/**/*.scss", gulp.series("styles"));
});

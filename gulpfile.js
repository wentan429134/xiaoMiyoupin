const gulp=require("gulp");
const sass=require("gulp-sass")

gulp.task("watchall",async ()=>{
    gulp.watch("*.html",async ()=>{
        gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xiaoMiyoupin"))
    })

    gulp.watch("sass/*.scss",async ()=>{
        gulp.src("sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\xiaoMiyoupin\\css"))
    })
    
})
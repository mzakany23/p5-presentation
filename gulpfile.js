var gulp = require('gulp');
var imageop = require('gulp-image-optimization');
 
gulp.task('images', function(cb) {
    gulp.src(['./img/**/*.png','./img/**/*.jpg','./img/**/*.gif','./img/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('public/images')).on('end', cb).on('error', cb);
});
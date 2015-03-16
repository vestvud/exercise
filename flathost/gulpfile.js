var gulp = require('gulp'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    spritesmith = require('gulp.spritesmith'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var paths = {
    src: {
        js: "./public/src/js*.js",
        less: {
            layouts: "./public/src/less/layouts/main.less",
            blocks: "./public/src/less/blocks/*.less",
            mixin: "./public/src/less/mixins/*.less",
            spriteLess: "./public/src/less/mixins/sprite/",
            spriteTemplate: "./public/src/less/mixins/sprite/template/sprite.mustache"
        },
        images: "./public/src/img/*.png"
    },
    bld: {
        css: "./public/bld/css/",
        js: "./public/bld/js/",
        images: "./public/bld/img/"
    }
};
/*sprite*/
gulp.task('sprite', function () {
    var spriteData =
        gulp.src(paths.src.images)
            .pipe( spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.less',
                cssFormat: 'less',
                algorithm: 'binary-tree',
                cssTemplate: paths.src.less.spriteTemplate,
                cssVarMap: function(sprite) {
                    sprite.name = 's-' + sprite.name
                }
            })
        );
    spriteData.img
        .pipe(gulp.dest(paths.bld.images));
    spriteData.css
        .pipe(gulp.dest(paths.src.less.spriteLess));
});
/*less*/
gulp.task('less', function () {
    gulp.src(paths.src.less.layouts)
        .pipe(plumber())
        .pipe(less({
            paths: [paths.src.less]
        }))
        .pipe(rename('style.css'))
        .pipe(csso())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(paths.bld.css));
});
gulp.task('less:watch', function(){
    gulp.watch([paths.src.less.blocks, paths.src.less.mixin], ['less']);
});
/*js*/
gulp.task('script', function() {
    gulp.src(paths.src.js)
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest(paths.bld.js));
});

/*watcher*/
gulp.task('watch', function() {
    gulp.watch(paths.src.js, ['script']);
    gulp.watch(paths.src.less.layouts, ['less']);
});

/*jade*/
gulp.task('jade', function() {
    console.log("jade");
});
/*default*/
gulp.task('default', ['watch', 'less:watch', 'less', 'script']);
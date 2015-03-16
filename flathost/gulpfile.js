var gulp = require('gulp'),
    less = require('gulp-less'),
    csso = require('gulp-csso'),
    spritesmith = require('gulp.spritesmith'),
    plumber = require('gulp-plumber'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

var paths = {
    dist: {
        js: "./public/dist/js*.js",
        less: {
            layouts: "./public/dist/less/layouts/main.less",
            blocks: "./public/dist/less/blocks/*.less",
            mixin: "./public/dist/less/mixins/*.less",
            spriteLess: "./public/dist/less/mixins/sprite/",
            spriteTemplate: "./public/dist/less/mixins/sprite/template/sprite.mustache"
        },
        images: "./public/dist/img/*.png"
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
        gulp.src(paths.dist.images)
            .pipe( spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.less',
                cssFormat: 'less',
                algorithm: 'binary-tree',
                cssTemplate: paths.dist.less.spriteTemplate,
                cssVarMap: function(sprite) {
                    sprite.name = 's-' + sprite.name
                }
            })
        );
    spriteData.img
        .pipe(gulp.dest(paths.bld.images));
    spriteData.css
        .pipe(gulp.dest(paths.dist.less.spriteLess));
});
/*less*/
gulp.task('less', function () {
    gulp.src(paths.dist.less.layouts)
        .pipe(plumber())
        .pipe(less({
            paths: [paths.dist.less]
        }))
        .pipe(rename('style.css'))
        .pipe(csso())
        .pipe(rename('style.min.css'))
        .pipe(gulp.dest(paths.bld.css));
});
gulp.task('less:watch', function(){
    gulp.watch([paths.dist.less.blocks, paths.dist.less.mixin], ['less']);
});
/*js*/
gulp.task('script', function() {
    gulp.src(paths.dist.js)
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(rename('script.min.js'))
        .pipe(gulp.dest(paths.bld.js));
});

/*watcher*/
gulp.task('watch', function() {
    gulp.watch(paths.dist.js, ['script']);
    gulp.watch(paths.dist.less.layouts, ['less']);
});

/*jade*/
gulp.task('jade', function() {
    console.log("jade");
});
/*default*/
gulp.task('default', ['watch', 'less:watch', 'less', 'script']);
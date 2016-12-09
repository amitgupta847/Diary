var ts = require('gulp-typescript');
var gulp = require('gulp');
var clean = require('gulp-clean');

var destPath = './libs/';

var paths = {
    npm: './node_modules/',
    angular: './wwwroot/lib/@angular/',
    angular2InMemoryWebApi: './wwwroot/lib/angular2-in-memory-web-api/',
    rxjs: './wwwroot/lib/rxjs/',
    lib: './wwwroot/lib/',
    scripts: [ 'tsScripts/**/*.css', 'tsScripts/**/*.html', 'tsScripts/**/*.png', , 'tsScripts/**/*.jpg'],
    //scripts: ['scripts/**/*.js', 'scripts/**/*.ts', 'scripts/**/*.map'],
};

// Delete the dist directory
gulp.task('clean', function () {
    return gulp.src(destPath)
        .pipe(clean());
});

gulp.task("scriptsNStyles", () => {
    gulp.src([
            'core-js/client/**',
            'systemjs/dist/system.src.js',
            'reflect-metadata/**',
            'rxjs/**',
            'zone.js/dist/**',
            '@angular/**',
            'jquery/dist/jquery.*js',
            'bootstrap/dist/js/bootstrap.*js'            
    ], {
        cwd: "node_modules/**"
    })
        .pipe(gulp.dest("./libs"));
});

//var tsProject = ts.createProject('tsScripts/tsconfig.json', {
//    typescript: require('typescript')
//});
gulp.task('CopyStaticResources', function (done) {

    //var tsResult = gulp.src([
    //        "tsScripts/*.ts"
    //])
    //    .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    //return tsResult.js.pipe(gulp.dest('./Scripts'));

    gulp.src(paths.scripts).pipe(gulp.dest('./Scripts'))
});

//ts - task to transpile TypeScript files to JavaScript using Gulp-TypeScript 
var tsProject = ts.createProject('tsScripts/tsconfig.json');
gulp.task('Transpile', function (done) {
    //var tsResult = tsProject.src()
    var tsResult = gulp.src([
            "tsScripts/**/*.ts"
    ])
        .pipe(ts(tsProject), undefined, ts.reporter.fullReporter());
    return tsResult.js.pipe(gulp.dest('./Scripts'));
});

gulp.task('watch', ['watch.ts']);

gulp.task('watch.ts', ['ts','Transpile'], function () {
    return gulp.watch('tsScripts/**/*.ts', ['ts']);
});

gulp.task('default', ['scriptsNStyles', 'watch']);
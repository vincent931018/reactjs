'use strick'

var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var $ = require('gulp-load-plugins')();

var _modules = [
    'addTodoBtn',
    'addTodoList',
    'setVisibility'
];

/**
 * [template params]
 * @_author author
 * @_date the date of file created
 */
var _author = 'caowencheng <845982120@qq.com>';
var _date = (function() {
    var date = new Date();
    return '' + date.getDate() + '.' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '.' + date.getFullYear();
})();

gulp.task('default',['injectScss'],function() {
    _generateForJSX();
});

gulp.task('injectScss', function() {
    _generateForScss();
});

function _generateForJSX() {
    for (var i = 0; i < _modules.length; i++) {
        console.log(_modules[i]);
        gulp.src('./dev-template/component.jsx')
            .pipe($.template({
                author: _author,
                date: _date,
                name: _modules[i].substr(0, 1).toUpperCase() + _modules[i].substr(1, _modules[i].length),
                moduleName: _modules[i],
                //tplUrl: (path.join(basePath, _moduleName, _moduleName) + '.tpl.html').replace(/^src\//, '')
            }))
            .pipe($.rename(_modules[i] + '.jsx'))
            .pipe(gulp.dest('./src/components'));
    }
};

function _generateForScss() {
    for (var i = 0; i < _modules.length; i++) {
        console.log(_modules[i]);
        gulp.src('./dev-template/scss.scss')
            .pipe($.template({
                author: _author,
                date: _date,
                name: _modules[i].substr(0, 1).toUpperCase() + _modules[i].substr(1, _modules[i].length),
                moduleName: _modules[i],
                //tplUrl: (path.join(basePath, _moduleName, _moduleName) + '.tpl.html').replace(/^src\//, '')
            }))
            .pipe($.rename(_modules[i] + '.scss'))
            .pipe(gulp.dest('./src/assets/scss'));
    }
}

/*
=========================================================
* Pretty Select - pretty up plain select boxes
=========================================================
* Product Page: https://hykedesigns.com/
* Copyright 2021 Hyke Designs (https://hykedesigns.com)
* License (https://hykedesigns.com/licensing)
* Designed and coded by https://hykedesigns.com
=========================================================
* The above copyright notice and this permission notice 
* shall be included in all copies or substantial portions 
* of the Software. Please contact us to request a removal.
*/

var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cleanCss = require('gulp-clean-css');
var del = require('del');
var fileinclude = require('gulp-file-include');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var wait = require('gulp-wait');

const cssbeautify = require('gulp-cssbeautify');
const htmlmin = require('gulp-htmlmin');
const npmDist = require('gulp-npm-dist');

// Define paths
const paths = {
    base: {
        base: './',
        node: '/node_moduels'
    },
    dist: {
        base: './dist/',
        css: './dist/css',
        js: './dist/js'
    },
    src: {
        base: './src/',
        css: './src/css',
        js: './src/js',
        
    }
}

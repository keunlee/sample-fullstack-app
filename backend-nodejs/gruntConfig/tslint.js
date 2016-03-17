'use strict';

module.exports = function(grunt) {
    return {
        options: {
            configuration: grunt.file.readJSON("tslint.json")
        },
        dev: {
            src: ["src/**/*.ts", "!node_modules/**/*.ts", "!obj/**/*.ts", "!typings/**/*.ts"] // avoid linting typings files and node_modules files
        }
    }
};

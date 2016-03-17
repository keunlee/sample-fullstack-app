'use strict';

module.exports = function(grunt) {
    grunt.event.on('watch', function(action, filepath) {
        grunt.config('tslint.dev.src', filepath);
    });

    return {
        dev: {
            files: ['src/**/*.ts'],
            options: {
                spawn: false
            },
            tasks: ['tslint:dev', 'tsc']
        }
    }
};


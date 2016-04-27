'use strict';

var shell = require('shelljs');

module.exports = function( grunt ) {
    grunt.initConfig({
    });

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', 'artifact']
    });

    grunt.registerTask('tsc', "compile typescript files", function() {
        shell.exec('tsc');
    });

    grunt.registerTask( 'build', [ 'tsc' ]);
    grunt.registerTask( 'default', [ 'build' ]);
};

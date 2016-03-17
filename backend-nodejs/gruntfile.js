'use strict';

var shell = require('shelljs');

module.exports = function( grunt ) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        nodemon: require('./gruntConfig/nodemon.js')(),
        watch: require('./gruntConfig/watch.js')(grunt),
        concurrent: require('./gruntConfig/concurrent.js')(),
        tslint: require('./gruntConfig/tslint.js')(grunt)
    });

    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', 'artifact']
    });

    grunt.registerTask('tsc', "compile typescript files", function() {
        shell.exec('tsc');
    });

    grunt.registerTask( 'build', [ 'tslint:dev', 'tsc' ]);
    grunt.registerTask( 'default', [ 'build', 'concurrent:dev' ]);
};
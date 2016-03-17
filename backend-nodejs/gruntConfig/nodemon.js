'use strict';

module.exports = function() {
    return {
        dev: {
            script: 'src/main.js',
            options:{
                watch: "src",
                delay: 200,
                nodeArgs: ['--debug']
            }
        }
    }
};

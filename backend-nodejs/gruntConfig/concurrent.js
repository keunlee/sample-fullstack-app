'use strict';

module.exports = function() {
    return {
        dev: {
            tasks: ['nodemon:dev', 'watch:dev'],
            options: {
                logConcurrentOutput: true
            }
        }
    }
};

// our proxy
var proxy = require('./lib/proxy')({port: 9001, xfwd: true });

// register the frontend server for proxying
proxy.register("localhost", "http://localhost:8081");

// register the backend server for proxying
proxy.register("localhost/service", "http://localhost:8080/service");
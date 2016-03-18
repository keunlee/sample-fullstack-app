var proxy = require('redbird')({port: 9000});

proxy.register("localhost", "http://localhost:8080");
proxy.register("localhost/api2", "http://localhost:8081");

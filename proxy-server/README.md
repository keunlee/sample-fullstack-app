## Proxy Server

### Overview

This small project will act as a proxy server between backend and frontend servers.

### Prerequisites

You will need the following things properly installed on your computer.

* node >= 5
* npm >= 3

To install the above, I highly recommend using a node version manager (i.e. https://github.com/creationix/nvm)

### Before Starting the Proxy Server

1. Start your frontend server (there are various implementations in this code base along with instructions on how to start
the server)
2. Start your backend server (there are various implementations in this code base along with instructions on how to start
the server)

### Starting the Proxy Server

1. From the commandline, change the current working directory to the folder `proxy-server`.
2. Run: `node main.js`
3. the frontend and backend api should now be accessible on port 9000

### Development Notes

The following assumptions are made when running this proxy, in this code base:

* The frontend server runs on port 8081
* the backend server runs on port 8080
* the frontend and backend server are proxied on port 9000

### Additional Notes

For apps running webpack, you can completely skip this if you want to use the proxying
capability built into webpack, or if you have other means for proxying (i.e. nginx, etc. etc.)

The motivation for using this is that, in the off-shoot chance you aren't using webpack, and you don't have an immediate way of
creating a proxy so that your frontend and backend are talking on the same domain, I've created one for you. Simple, but useful.

Alternatively, you could modify your CORS settings too as well, which will not necessitate the need for a proxy.
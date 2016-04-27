## React Frontend

### Overview

For this frontend implementation, the following are used:

* React + Redux
* Grunt CLI - Task runner

All source, with exception of the grunt config files, are written in Typescript.

### Pre-Prerequisites

You will need the following things properly installed on your computer.

* node >= 5
* npm >= 3

To install the above, I highly recommend using a node version manager (i.e. https://github.com/creationix/nvm)

### Prerequisites

* typescript >= 1.8 `npm install -g typescript`
* typings `npm install -g typings`
* grunt-cli `npm install -g grunt-cli`

### Install npm and typscript Packages

* `npm install`
* `typings install`

### Build Typescript Sources

The following should lint and transpile typescript sources to javascript (there should be no errors)

* `npm run build`

### Starting the Frontend Webpack Server

The following will start a webpack development server on port 8081

* `npm start`

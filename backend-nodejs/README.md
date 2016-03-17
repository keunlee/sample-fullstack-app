## Node JS Backend

### Pre-Prerequisites

You will need the following things properly installed on your computer.

* node >= 5
* npm >= 3

To install the above, I highly recommend using a node version manager (i.e. https://github.com/creationix/nvm)

### Prerequisites

* typescript >= 1.8 `npm install -g typescript@next`
* typings `npm install -g typings`
* grunt-cli `npm install -g grunt-cli`

### Install npm and typscript packages

* `npm install`
* `typings install`

### Build Typescript sources

The following should lint and transpile typescript sources to javascript (there should be no errors)

* `grunt build`

### Database Setup

1. locate the following folder `database` and execute the sql scripts `create.sql` and `schema.sql`, in that order, against your postgresql database.
2. TODO: create a placeholder for where the node js backend can access the db credentials

### Loading Sample Data

1. From the commandline, change the current working directory to the folder `backend-nodejs`. This is the root directory for the node js backend.
3. Run: `node cli/main.js file resources/data/nyse.csv`
4. Run: `node cli/main.js file resources/data/nasdaq.csv`
5. Run: `node cli/main.js file resources/data/amex.csv`

### Starting the Backend Server

1. From the commandline, change the current working directory to the folder `backend-nodejs`.
2. Run: `grunt`
3. Verify that the server has started
4. Verify that our stock look up service is working by navigating to the following: [http://localhost:8080/service/stocks?q=aa](http://localhost:8080/service/stocks?q=aa) (you should see results)

### Development Notes

I am using sequelize as a Node JS based ORM. For more info on how to generate a typescript based domain model from a database, as well as usage, please see the following forked project:

https://github.com/keunlee/sequelize-auto-ts

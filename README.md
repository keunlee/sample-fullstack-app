## Overview

Sample fullstack application which allows you to look up stock symbols and chart them. 

## Backend

### Prerequisites

You will need the following things properly installed on your computer.

* Maven
* java 1.7+
* Postgresql 9+

### Database Setup

1. locate the following folder `backend/src/scripts` and execute the sql scripts `create.sql` and `schema.sql`, in that order, against your postgresql database. 
2. locate the following file `backend/src/main/resources/database.properties` and replace the property values to match that of your own environment.

### Loading Sample Data

1. From the commandline, change the current working directory to the folder `backend`. This is the root directory and you should see a pom file located in this directory. 
2. Run: `mvn clean compile package`
3. Verify the existence of directory: `backend/target` (i.e. `ls`)
3. Run: `java -jar target/exercise-1.0-SNAPSHOT.jar import --file src/main/resources/data/nyse.csv`
4. Run: `java -jar target/exercise-1.0-SNAPSHOT.jar import --file src/main/resources/data/nasdaq.csv`
5. Run: `java -jar target/exercise-1.0-SNAPSHOT.jar import --file src/main/resources/data/amex.csv`

### Starting the Backend Server

1. From the commandline, change the current working directory to the folder `backend`. This is the root directory and you should see a pom file located in this directory.
2. Run: `mvn jetty:run`
3. Verify the that the server has started
4. Verify that our stock look up service is working by navigating to the following: [http://localhost:8080/service/stocks?q=aa](http://localhost:8080/service/stocks?q=aa) (you should see results)

## Frontend

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)
* [Python 2.7](https://www.python.org/)
* [Compass](http://compass-style.org/install/)

### Installation

* From the commandline, change the current working directory to the folder `frontend`.
* Run: `npm install`
* Run: `bower install`

### Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)


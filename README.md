## Overview

Sample fullstack application which allows you to look up stock symbols and chart them.

## Prerequisites

You will need the following things properly installed on your computer.

* Postgresql 9+

Additionally, based on the backend and frontend implementations, you may need to install additional software. Please see their README's for more info.

## Database Setup

* Locate the following folder `database` and execute the sql scripts `create.sql` and `schema.sql`, in that order, against your postgresql database.

## Backend Setup

This project has three backend implementations which are identical in feature but different in implementation.

Please choose between any one of the implementations and setup as guided in their README's.

* Java Backend
* Node JS Backend
* .Net Backend

## Frontend Setup

### TODO:

Ember CLI is F'd for node >=5 and npm >= 3 :( Will need to switch the frontend implementation with something else. (i.e. react, angular2, or aurelia)

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

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

* Java Backend (backend-java)
* Node JS Backend (backend-nodejs)
* .Net Backend (backend-dotnet)

## Frontend Setup

Please choose between any one of the implementations and setup as guided in their README's.

* React Frontend (frontend-react)

## Running Backend, Frontend, and Proxy Server

* (1) Follow instructions for setting up a backend implementation and starting it. They can be found in each implementations README.
* (2) Follow instructions for setting up a frontend implementation and starting it. They can be found in each implementations README.
* (3) Follow instructions for starting up a proxy server on port 9000 in the `proxy-server` subproject, found in the README.
* (4) Once the backend, frontend, and proxy servers are running goto: http://localhost:9000

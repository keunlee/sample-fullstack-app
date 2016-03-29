## Dot Net Backend

### Overview

* ASP .Net Web API 2 - REST API Server
* NHibernate - ORM framework (Using mapping by code)
* Autofac - Dependency Injection
* DNVM/DNX/DNU

### Prerequisites

You will need the following things property installed on your computer:

* DNVM - Dot Net Version Manager
* DNX - Dot Net Execution Environment
* DNU - Dot Net Utilities
* NodeJS (>= 5)
* NPM (>= 3)

Current version of DNX installed and used for this project: 1.0.0-rc1-update1

### Building Source

1. From the commandline, change the current working directory to the folder `backend-dotnet/BackendDotNet/`
2. Run: `npm run build` - this will run dnu restore and dnu build on all solution projects.

### Database Setup

1. locate the following folder `database` and execute the sql scripts `create.sql` and `schema.sql`, in that order, against your postgresql database. (Skip this step if you've done this already)
2. locate the following file `BackendDotNet/src/BackendDotNet.CLI/hibernate.cfg.xml` and modify the connection string parameters to match your database environment.
3. locate the following file `BackendDotNet/src/BackendDotNet.Tests/hibernate.cfg.xml` and modify the connection string parameters to match your database environment.
4. locate the following file `BackendDotNet/src/BackendDotNet.Web/hibernate.cfg.xml` and modify the connection string parameters to match your database environment.

### Loading Sample Database

(Skip this step if you've done this already)

1. From the commandline, change the current working directory to the folder `BackendDotNet/src/BackendDotNet.CLI`
2. Run: `dnx run -f ../../resources/data/amex.csv`
3. Run: `dnx run -f ../../resources/data/nasdaq.csv`
4. Run: `dnx run -f ../../resources/data/nyse.csv`

To build this project alone:

Run: `dnu restore`

Run: `dnu build`

### Starting the Backend Server

1. From the commandline, change the current working directory to the folder `BackendDotNet/src/BackendDotNet.Web`

2. Run: `dnx web`

3. Verify that the server has started
4. Verify that our stock look up service is working by navigating to the following: [http://localhost:8080/service/stocks?q=aa](http://localhost:8080/service/stocks?q=aa) (you should see results)

To build this project alone:

Run: `dnu restore`

Run: `dnu build`

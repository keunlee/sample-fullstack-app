## Java Backend

### Prerequisites

You will need the following things properly installed on your computer.

* Maven
* java 1.7+
* Postgresql 9+

### Database Setup

1. locate the following folder `database` and execute the sql scripts `create.sql` and `schema.sql`, in that order, against your postgresql database.
2. locate the following file `backend-java/src/main/resources/database.properties` and replace the property values to match that of your own environment.

### Loading Sample Data

1. From the commandline, change the current working directory to the folder `backend-java`. This is the root directory for the java backend and you should see a pom file located in this directory.
2. Run: `mvn clean compile package`
3. Verify the existence of directory: `backend-java/target` (i.e. `ls`)
3. Run: `java -jar target/exercise-1.0-SNAPSHOT.jar import --file src/main/resources/data/nyse.csv`
4. Run: `java -jar target/exercise-1.0-SNAPSHOT.jar import --file src/main/resources/data/nasdaq.csv`
5. Run: `java -jar target/exercise-1.0-SNAPSHOT.jar import --file src/main/resources/data/amex.csv`

### Starting the Backend Server

1. From the commandline, change the current working directory to the folder `backend-java`. This is the root directory and you should see a pom file located in this directory.
2. Run: `mvn jetty:run`
3. Verify that the server has started
4. Verify that our stock look up service is working by navigating to the following: [http://localhost:8080/service/stocks?q=aa](http://localhost:8080/service/stocks?q=aa) (you should see results)

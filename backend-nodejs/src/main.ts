///<reference path="../typings/index.d.ts" />

import {IApplicationContext} from "./core/context/IApplicationContext";
import {ApplicationContext} from "./core/context/ApplicationContext";

let applicationContext : IApplicationContext = new ApplicationContext();

applicationContext.initializeModels();
applicationContext.initializeDependencies();
applicationContext.startServer();
applicationContext.initializeRoutes();

export = applicationContext;



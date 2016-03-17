import {IApplicationContext} from "./IApplicationContext";
import {Server} from "../Server";
import {DependenciesConfig} from "../../config/DependenciesConfig";
import {Kernel} from '../../../node_modules/inversify/source/inversify';
import models = require('../../domain/sequelize-models');

let packageJson = require('../../../package.json');

export class ApplicationContext implements IApplicationContext {
    public kernel : IKernel;
    public server : Server;
    public dependencies : DependenciesConfig;

    /**
     *
     */
    constructor() {
        this.kernel = new Kernel();
        this.server = new Server( this );
    }

    /**
     *
     */
    public startServer() : void {
        this.server.startServer();
    }

    /**
     *
     */
    public initializeRoutes() : void {
        this.server.initializeRoutes();
    }

    /**
     *
     */
    public initializeDependencies() : void {
        this.dependencies = new DependenciesConfig( this.kernel );
        this.dependencies.initializeDependencies();
    }
    
    /**
     *
     * @returns {IKernel}
     */
    public getKernel() : IKernel {
        return this.kernel;
    }

    /**
     * 
     */
    public initializeModels() : void {
        models.initialize( packageJson.database.name , packageJson.database.username, packageJson.database.password, {
            dialect : packageJson.database.dialect,
            define : {
                timestamps : false,
                freezeTableName : true
            }
        });
    }
}
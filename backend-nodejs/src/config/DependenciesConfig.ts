///<reference path="../../typings/main.d.ts" />

import { TypeBinding, TypeBindingScopeEnum } from '../../node_modules/inversify/source/inversify';
import {StockService} from "../service/StockService";
import {StockServiceImpl} from "../service/impl/StockServiceImpl";

export class DependenciesConfig {
    private kernel : IKernel;
    
    /**
     *
     */
    constructor( kernel : IKernel ) {
        this.kernel = kernel;
    }

    /**
     *
     */
    public initializeDependencies() : void {
        // configurable DI bindings
        this.kernel.bind(new TypeBinding<StockService>("StockService", StockServiceImpl, TypeBindingScopeEnum.Singleton));
    }
}
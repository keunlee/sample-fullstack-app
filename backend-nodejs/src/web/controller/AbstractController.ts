///<reference path="../../../typings/index.d.ts" />

import {IApplicationContext} from "../../core/context/IApplicationContext";

export abstract class AbstractController {
    protected kernel : IKernel;
    private applicationContext : IApplicationContext;

    /**
     * 
     * @param applicationContext
     */
    constructor( applicationContext : IApplicationContext ) {
        this.applicationContext = applicationContext;
        this.kernel = applicationContext.getKernel();
    }
}
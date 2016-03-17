///<reference path="../../../typings/main.d.ts"/>

import {IApplicationContext} from "../../core/context/IApplicationContext";

export class AbstractController {
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
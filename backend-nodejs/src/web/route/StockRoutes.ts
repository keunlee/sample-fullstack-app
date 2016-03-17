import {IRouter} from "./IRouter";
import {StockController} from "../controller/StockController";
import {IApplicationContext} from "../../core/context/IApplicationContext";

let Joi = require('joi');

export class StockRoutes implements IRouter {
    private stockController : StockController;

    /**
     *
     * @param applicationContext
     */
    constructor( applicationContext : IApplicationContext ) {
        this.stockController = new StockController( applicationContext );
    }

    /**
     *
     * @returns {null}
     */
    public createRoutes() : any {
        let routes : any = [{
            method : 'GET',
            path : '/service/stocks',
            config : {
                handler : this.stockController.findStocksByWildCard,
                bind: this.stockController,
                validate : {
                    query : {
                        q : Joi.string()
                    }
                }
            }
        }];
        return routes;
    }
}
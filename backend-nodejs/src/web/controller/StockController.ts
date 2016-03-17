import {AbstractController} from "./AbstractController";
import {IApplicationContext} from "../../core/context/IApplicationContext";
import {StockService} from "../../service/StockService";

export class StockController extends AbstractController {
    private stockService : StockService = this.kernel.resolve<StockService>("StockService");

    /**
     * 
     * @param applicationContext
     */
    constructor(applicationContext : IApplicationContext) {
        super(applicationContext);
    }

    /**
     *
     * @param request
     * @param reply
     */
    public findStocksByWildCard(request : any, reply : any) : void {
        let self : StockController = this;
        let queryParam : string = request.query.q;

        self.stockService.findStocksByWildCard( queryParam )
            .then( (result : any) => {
                reply( result );
            })
            .catch( (error : Error) => {
                reply( error );
            });
    }
}
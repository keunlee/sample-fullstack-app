import Q = require("q");
import {HttpService} from "../utils/HttpService";
import HttpResponse from "../utils/HttpResponse";
import {Stock} from "../models/Stock";

export class StockService {

    public static findStocksByWildCard( query : string ) : Q.Promise<Stock[]> {
        let options = {
            uri: `${window.location.origin}/service/stocks?q=${query}`
        };

        let deferred = Q.defer<any>();

        HttpService.request(options, 'get')
            .then((response: HttpResponse) => {
                if ( response.httpCode === 200 ) {
                    let parsedResponse : any[] = JSON.parse( response.body );
                    let stocks : Stock[] = [];
                    parsedResponse.forEach( item => {
                        stocks.push( Stock.deserialize( item ) );
                    });

                    deferred.resolve(stocks);
                } else {
                    deferred.reject( new Error("could not retrieve stocks"));
                }
            })
            .catch((err: any) => {
                deferred.reject(err);
            });

        return deferred.promise;
    }
}
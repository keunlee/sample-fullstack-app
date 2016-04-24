import Q = require("q");
import {HttpService} from "../utils/HttpService";
import HttpResponse from "../utils/HttpResponse";
import {Stock} from "../models/Stock";

export class StockService {

    public static findStocksByWildCard(query : string) : Q.Promise<Stock[]> {
        let deferred = Q.defer<any>();

        let options = {
            uri : `${window.location.origin}/service/stocks?q=${query}`
        };

        HttpService.request(options, 'get')
            .then((response : HttpResponse) => {
                if (response.httpCode === 200) {
                    let parsedResponse : any[] = JSON.parse(response.body);
                    let stocks : Stock[] = [];
                    parsedResponse.forEach(item => {
                        stocks.push(Stock.deserialize(item));
                    });

                    deferred.resolve(stocks);
                } else {
                    deferred.reject(new Error("could not retrieve stocks"));
                }
            })
            .catch((err : any) => {
                deferred.reject(err);
            });

        return deferred.promise;
    }

    public static getHistoricalStockData( symbol : string ) : Q.Promise<any> {
        let deferred = Q.defer<any>();

        let options = {
            uri : `${window.location.origin}/service/stockhistory/${symbol}`
        };

        HttpService.request(options, 'get')
            .then((response : HttpResponse) => {
                if (response.httpCode === 200) {
                    let parsedResponse : any = JSON.parse(response.body);
                    deferred.resolve(parsedResponse);
                } else {
                    deferred.reject(new Error("could not retrieve stock data"));
                }
            })
            .catch((err : any) => {
                deferred.reject(err);
            });

        return deferred.promise;
    }
}
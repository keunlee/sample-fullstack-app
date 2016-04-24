import {StockService} from "../StockService";
import {StockPojo, StockInstance} from "../../domain/sequelize-types";
import models = require('../../domain/sequelize-models');
import Q = require('q');
import {StockRepository} from "../../repository/StockRepository";
import {StockDto} from "../../dto/StockDto";
import {HttpService} from "../../utils/HttpService";
import HttpResponse from "../../utils/HttpResponse";

let fs = require('fs');
let parse = require('csv-parse');
let path = require('path');
let moment = require('moment');

export class StockServiceImpl implements StockService {
    private stockRepository : StockRepository = new StockRepository();

    /**
     *
     * @param file
     * @returns {Promise<StockPojo[]>|Promise<T>}
     */
    public importStocksByCSVFile(file : string) : Q.Promise<StockDto[]> {
        let self : StockServiceImpl = this;
        let deferred : Q.Deferred<StockDto[]> = Q.defer<StockDto[]>();
        let stockDtos : StockDto[] = [];

        this.loadFile(file)
            .then((data : any) => {
                let createPromises : any[] = [];

                parse(data, {delimeter : ','}, (err, output) => {
                    for (let i = 1; i < output.length; i++) {
                        let item = output[i];
                        let stock : StockPojo = {
                            symbol : item[0],
                            name : item[1],
                            lastsale : item[2],
                            marketcap : item[3],
                            ipoyear : item[4],
                            sector : item[5],
                            industry : item[6],
                            summary : item[7]
                        };

                        createPromises.push( self.stockRepository.create(stock));
                    }

                    Q.allSettled(createPromises)
                        .then( (results : Q.PromiseState<any>[]) => {
                            let allRecordsImported = true;
                            results.forEach( each => {
                                if ( each.state === "fulfilled") {
                                    stockDtos.push( new StockDto(each.value) );
                                } else {
                                   allRecordsImported = false;
                                }
                            });

                            if ( allRecordsImported ) {
                                console.log("ALL RECORDS IMPORTED");
                                deferred.resolve(stockDtos);
                            } else {
                                let error : Error = new Error("RECORD IMPORT FAILED");
                                deferred.reject(error);
                            }
                        })
                        .catch(error => {
                            deferred.reject(error);
                        })
                });
                deferred.resolve(null);
            })
            .catch((error : Error) => {
                deferred.reject(error);
            });

        return deferred.promise;
    }

    /**
     *
     * @param phrase
     * @returns {Promise<StockPojo[]>|Promise<T>}
     */
    public findStocksByWildCard(phrase : string) : Q.Promise<StockDto[]> {
        let self : StockServiceImpl = this;
        let deferred : Q.Deferred<StockDto[]> = Q.defer<StockDto[]>();

        self.stockRepository.findByWildCard( phrase )
            .then( ( results : StockInstance[] ) => {
                let stockDtos : StockDto[] = [];
                results.forEach( ( each : StockInstance ) => {
                    stockDtos.push( new StockDto( each ) );
                });
                deferred.resolve( stockDtos );
            })
            .catch( (error : Error) => {
                deferred.reject( error );
            })

        return deferred.promise;
    }

    /**
     *
     * @param symbol
     * @returns {Promise<any>}
     */
    public getHistoricalStockData( symbol : string ) : Q.Promise<any> {
        let deferred = Q.defer<any>();
        let startDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
        let endDate = moment().format('YYYY-MM-DD');

        let yqlURL = "http://query.yahooapis.com/v1/public/yql?q=";
        let dataFormat = "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        let historicalQ = yqlURL + "select%20*%20from%20yahoo.finance.historicaldata%20where%20symbol%20%3D%20%22" + symbol + "%22%20and%20startDate%20%3D%20%22" + startDate + "%22%20and%20endDate%20%3D%20%22" + endDate + "%22" + dataFormat;

        let options = {
            uri : historicalQ
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

    /**
     *
     * @param filePath
     * @returns {Promise<any>|Promise<T>}
     */
    private loadFile(filePath : string) : Q.Promise<any> {
        let absolutePath : string = path.resolve(filePath);
        let deferred : Q.Deferred<any> = Q.defer();

        fs.readFile(absolutePath, 'utf8', (err, data) => {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });

        return deferred.promise;
    }
}
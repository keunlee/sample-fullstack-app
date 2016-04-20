import {StockService} from "../StockService";
import {StockPojo, StockInstance} from "../../domain/sequelize-types";
import models = require('../../domain/sequelize-models');
import Q = require('q');
import {StockRepository} from "../../repository/StockRepository";
import {StockDto} from "../../dto/StockDto";

let fs = require('fs');
let parse = require('csv-parse');
let path = require('path');

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
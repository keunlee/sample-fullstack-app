import {StockService} from "../StockService";
import {StockPojo} from "../../domain/sequelize-types";
import models = require('../../domain/sequelize-models');
import Q = require('q');

let fs = require('fs');
let parse = require('csv-parse');
let path = require('path');

export class StockServiceImpl implements StockService {

    /**
     *
     * @param file
     * @returns {Promise<StockPojo[]>|Promise<T>}
     */
    public importStocksByCSVFile(file : string) : Q.Promise<StockPojo[]> {
        let deferred : Q.Deferred<StockPojo[]> = Q.defer<StockPojo[]>();

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

                        createPromises.push(models.StockModel.create(stock));
                    }

                    Q.allSettled(createPromises)
                        .then(result => {
                            console.log("ALL RECORDS SAVED");
                            deferred.resolve(null);
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
    public findStocksByWildCard(phrase : string) : Q.Promise<StockPojo[]> {
        let deferred : Q.Deferred<StockPojo[]> = Q.defer<StockPojo[]>();
        deferred.resolve(null);
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
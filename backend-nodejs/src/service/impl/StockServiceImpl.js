"use strict";
var models = require('../../domain/sequelize-models');
var Q = require('q');
var fs = require('fs');
var parse = require('csv-parse');
var path = require('path');
var StockServiceImpl = (function () {
    function StockServiceImpl() {
    }
    StockServiceImpl.prototype.importStocksByCSVFile = function (file) {
        var deferred = Q.defer();
        this.loadFile(file)
            .then(function (data) {
            var createPromises = [];
            parse(data, { delimeter: ',' }, function (err, output) {
                for (var i = 1; i < output.length; i++) {
                    var item = output[i];
                    var stock = {
                        symbol: item[0],
                        name: item[1],
                        lastsale: item[2],
                        marketcap: item[3],
                        ipoyear: item[4],
                        sector: item[5],
                        industry: item[6],
                        summary: item[7]
                    };
                    createPromises.push(models.StockModel.create(stock));
                }
                Q.allSettled(createPromises)
                    .then(function (result) {
                    console.log("ALL RECORDS SAVED");
                    deferred.resolve(null);
                })
                    .catch(function (error) {
                    deferred.reject(error);
                });
            });
            deferred.resolve(null);
        })
            .catch(function (error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };
    StockServiceImpl.prototype.findStocksByWildCard = function (phrase) {
        var deferred = Q.defer();
        deferred.resolve(null);
        return deferred.promise;
    };
    StockServiceImpl.prototype.loadFile = function (filePath) {
        var absolutePath = path.resolve(filePath);
        var deferred = Q.defer();
        fs.readFile(absolutePath, 'utf8', function (err, data) {
            if (err) {
                deferred.reject(err);
            }
            else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    };
    return StockServiceImpl;
}());
exports.StockServiceImpl = StockServiceImpl;
//# sourceMappingURL=StockServiceImpl.js.map
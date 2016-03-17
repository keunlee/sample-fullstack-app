"use strict";
var Sequelize = require('sequelize');
exports.initialized = false;
function initialize(database, username, password, options) {
    if (exports.initialized) {
        return;
    }
    exports.SEQUELIZE = new Sequelize(database, username, password, options);
    exports.StockModel = exports.SEQUELIZE.define('stock', {
        'id': { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        'industry': { type: Sequelize.STRING, allowNull: false, defaultValue: undefined },
        'ipoyear': { type: Sequelize.STRING, allowNull: false, defaultValue: undefined },
        'lastsale': { type: Sequelize.STRING, allowNull: false, defaultValue: undefined },
        'marketcap': { type: Sequelize.STRING, allowNull: false, defaultValue: undefined },
        'name': { type: Sequelize.STRING, allowNull: false, defaultValue: undefined },
        'sector': { type: Sequelize.STRING, allowNull: false, defaultValue: undefined },
        'summary': { type: Sequelize.STRING, allowNull: false, defaultValue: undefined },
        'symbol': { type: Sequelize.STRING, allowNull: false, defaultValue: undefined }
    }, {
        classMethods: {
            GetStock: function (stock) {
                var where = {};
                var id = parseInt(stock);
                if (isNaN(id)) {
                    if (stock['id'] !== undefined) {
                        where['id'] = stock['id'];
                    }
                    if (stock['industry'] !== undefined) {
                        where['industry'] = stock['industry'];
                    }
                    if (stock['ipoyear'] !== undefined) {
                        where['ipoyear'] = stock['ipoyear'];
                    }
                    if (stock['lastsale'] !== undefined) {
                        where['lastsale'] = stock['lastsale'];
                    }
                    if (stock['marketcap'] !== undefined) {
                        where['marketcap'] = stock['marketcap'];
                    }
                    if (stock['name'] !== undefined) {
                        where['name'] = stock['name'];
                    }
                    if (stock['sector'] !== undefined) {
                        where['sector'] = stock['sector'];
                    }
                    if (stock['summary'] !== undefined) {
                        where['summary'] = stock['summary'];
                    }
                    if (stock['symbol'] !== undefined) {
                        where['symbol'] = stock['symbol'];
                    }
                }
                else {
                    where['!!cannotFindIdFieldOnstock!!'] = id;
                }
                return exports.StockModel.find({ where: where });
            }
        }
    });
    return exports;
}
exports.initialize = initialize;
//# sourceMappingURL=sequelize-models.js.map
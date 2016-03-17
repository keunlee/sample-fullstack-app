////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

/// <reference path="../../typings/main.d.ts" />

import sequelize = require('sequelize');
import types = require('./sequelize-types');

var Sequelize:sequelize.SequelizeStatic = require('sequelize');

export var initialized:boolean = false;
export var SEQUELIZE:sequelize.Sequelize;

export var StockModel:types.StockModel;


export function initialize(database:string, username:string, password:string, options:sequelize.Options):any
{
    if (initialized)
    {
        return;
    }

    SEQUELIZE = new Sequelize(database, username, password, options);

    StockModel = <types.StockModel> SEQUELIZE.define<types.StockInstance, types.StockPojo>('stock', {
        'id': {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
        'industry': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined},
        'ipoyear': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined},
        'lastsale': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined},
        'marketcap': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined},
        'name': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined},
        'sector': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined},
        'summary': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined},
        'symbol': {type: Sequelize.STRING, allowNull: false, defaultValue: undefined}
        },
        {
            classMethods: {
                GetStock:(stock:any) => {
                    var where:{[key:string]:any} = {};
                    var id:number = parseInt(stock);
                    if (isNaN(id)) {
                        if (stock['id'] !== undefined) { where['id'] = stock['id']}
                        if (stock['industry'] !== undefined) { where['industry'] = stock['industry']}
                        if (stock['ipoyear'] !== undefined) { where['ipoyear'] = stock['ipoyear']}
                        if (stock['lastsale'] !== undefined) { where['lastsale'] = stock['lastsale']}
                        if (stock['marketcap'] !== undefined) { where['marketcap'] = stock['marketcap']}
                        if (stock['name'] !== undefined) { where['name'] = stock['name']}
                        if (stock['sector'] !== undefined) { where['sector'] = stock['sector']}
                        if (stock['summary'] !== undefined) { where['summary'] = stock['summary']}
                        if (stock['symbol'] !== undefined) { where['symbol'] = stock['symbol']}
                    } else {
                        where['!!cannotFindIdFieldOnstock!!'] = id;
                    }
                    return StockModel.find({where: where});
                }
            }
        });
    
    return exports;
}

////////////////////////////////////////////////////////////////////
//
// GENERATED CLASS
//
// DO NOT EDIT
//
// See sequelize-auto-ts for edits
//
////////////////////////////////////////////////////////////////////

'depends typescript-client-server-compat.js';

import types = require('./sequelize-types');

export interface SequelizeNames {
    TableNames: TableNames;
    calculatedFields:CalculatedFields;
    references:References;
    stockFields:StockFields;
}

export class TableNames {
    stock:string = 'stock';
}
export var tableNames:TableNames = new TableNames();

export class StockFields {
    id:string = 'id';
    industry:string = 'industry';
    ipoyear:string = 'ipoyear';
    lastsale:string = 'lastsale';
    marketcap:string = 'marketcap';
    name:string = 'name';
    sector:string = 'sector';
    summary:string = 'summary';
    symbol:string = 'symbol';
}
export var stockFields:StockFields = new StockFields();


export class CalculatedFields {}
export var calculatedFields:CalculatedFields = new CalculatedFields();

export class References {
    id:types.Reference = { tableName: 'stock', primaryKey: 'id', foreignKey: 'id', as: undefined};
}

export var references:References = new References();

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
import types = require('./sequelize-types'); // important so we can use same fully qualified names in all generated files


var asserters:{[typeName:string]:(pojo:any, allowUndefined?:boolean) => void} = {};

//////////////////////////////////////////////////////////////////////////////
//
//
//               stock
//
//
//////////////////////////////////////////////////////////////////////////////


export interface StockPojo
{
    id?:number;
    industry:string;
    ipoyear:string;
    lastsale:string;
    marketcap:string;
    name:string;
    sector:string;
    summary:string;
    symbol:string;
}

export interface StockInstance extends sequelize.Instance<StockPojo>, StockPojo { }

export interface StockModel extends sequelize.Model<StockInstance, StockPojo> { }

export function AssertValidStock(pojo:StockPojo, allowUndefined?:boolean):void {

    if (pojo === undefined || pojo === null) {
        if (allowUndefined) {
            return;
        }
        throw new Error('Invalid stock provided. It is \'' + (typeof pojo) + '\'.');
    }
    var fieldNames:string[] = Object.keys(pojo);
    if (fieldNames.length === 0) {
        throw new Error('Invalid stock provided. It is an empty object.');
    }

    var i:number = fieldNames.length;
    while(i-- > 0) {
        switch(fieldNames[i]) {
            case 'id': assertValidFieldType('stock', 'id', pojo, 'number'); break;
            case 'industry': assertValidFieldType('stock', 'industry', pojo, 'string'); break;
            case 'ipoyear': assertValidFieldType('stock', 'ipoyear', pojo, 'string'); break;
            case 'lastsale': assertValidFieldType('stock', 'lastsale', pojo, 'string'); break;
            case 'marketcap': assertValidFieldType('stock', 'marketcap', pojo, 'string'); break;
            case 'name': assertValidFieldType('stock', 'name', pojo, 'string'); break;
            case 'sector': assertValidFieldType('stock', 'sector', pojo, 'string'); break;
            case 'summary': assertValidFieldType('stock', 'summary', pojo, 'string'); break;
            case 'symbol': assertValidFieldType('stock', 'symbol', pojo, 'string'); break;
            default:
                throw new Error('Invalid stock provided. Field \'' + fieldNames[i] + '\' is not supported.')
        }
    }
}
asserters['stock'] = AssertValidStock;





var BOOLEAN_TYPE:string = typeof(true);
var NUMBER_TYPE:string = typeof(1);
var STRING_TYPE:string = typeof('');
var FUNCTION_TYPE:string = typeof(function() {});
var DATE_EXPECTED_TYPE:string = 'Date';
var BUFFER_EXPECTED_TYPE:string = 'Buffer';
var BUFFER_EXISTS:boolean = typeof Buffer !== 'undefined'; //in node exists, in js not, so only validate in node

function assertValidFieldType(pojoName:string, fieldName:string, pojo:any, expectedType:string):void {

    var value:any = pojo[fieldName];
    var actualType:string = typeof value;

    if (value === undefined || value === null) {
        return;
    }

    switch(expectedType) {
        case BOOLEAN_TYPE:
            if (actualType !== BOOLEAN_TYPE && actualType !== NUMBER_TYPE) {
                err();
            }
            pojo[fieldName] = Boolean(value);
            return;

        case NUMBER_TYPE:
            if (actualType === NUMBER_TYPE) {
                return;
            }
            if (actualType === STRING_TYPE) {
                var newValue:number = parseFloat(value);
                if (isNaN(newValue)) {
                    err();
                }
                pojo[fieldName] = newValue;
            }
            return;

        case STRING_TYPE:
            if (actualType !== STRING_TYPE) {
                pojo[fieldName] = value.toString();
            }
            return;

        case DATE_EXPECTED_TYPE:
            var getTime:Function = value.getTime;
            if (typeof getTime === FUNCTION_TYPE) {
                var timeValue:number = value.getTime();
                if (isNaN(timeValue)){
                    err();
                }
                if (!(value instanceof Date)) {
                    pojo[fieldName] = new Date(timeValue);
                }
                return;
            }

            if (actualType === STRING_TYPE) {
                var newDate:Date = new Date(value);
                if (!isNaN(newDate.getTime())) {
                    pojo[fieldName] = newDate;
                    return;
                }
            }
            err();
            return;

        case BUFFER_EXPECTED_TYPE:
            if (!BUFFER_EXISTS) {
                return;
            }

            if (!(value instanceof Buffer)) {
                err();
            }
            return;
    }

    // one pojo of array of array of pojos?
    if (expectedType.length > 3 && expectedType.substr(expectedType.length - 2, 2) === '[]') {
        var individualPojoType:string = expectedType.substr(0, expectedType.length - 6);

        var asserter:Function = asserters[individualPojoType];
        if (typeof asserter !== FUNCTION_TYPE) {
            err();
        }

        if (isNaN(value.length)) {
            err();
        }
        for(var i:number = 0; i<value.length; i++) {
            try {
                asserter(value[i], true);
            } catch(e) {
                err('Error at index \'' + i + '\': ' + e.message);
            }
        }

        // all instances valid
        return;
    }

    var asserter:Function = asserters[expectedType.substr(0, expectedType.length - 4)];
    if (typeof asserter !== FUNCTION_TYPE) {
        expectedTypeErr();
    }

    try {
        asserter(value, true);
    } catch(e) {
        err(e.message);
    }

    function err(extraMessage?:string):void {
        var message:string = 'Invalid ' + pojoName + ' provided. Field \'' + fieldName + '\' with value \'' + safeValue(value) + '\' is not a valid \'' + expectedType + '\'.';
        if (extraMessage !== undefined) {
            message += ' ' + extraMessage;
        }
        throw new Error(message);
    }

    function expectedTypeErr():void {
        throw new Error('Cannot validate \'' + pojoName + '\' field \'' + fieldName + '\' since expected type provided \'' + expectedType + '\' is not understood.');
    }
}

function safeValue(value:any):string {

    if (value === undefined || value === null) {
        return typeof value;
    }

    var s:string = value.toString();
    return s.substr(0, 100);
}

export interface Reference {
    tableName:string;
    primaryKey:string;
    foreignKey:string;
    as:string;
}

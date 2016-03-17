'depends typescript-client-server-compat.js';
"use strict";
var TableNames = (function () {
    function TableNames() {
        this.stock = 'stock';
    }
    return TableNames;
}());
exports.TableNames = TableNames;
exports.tableNames = new TableNames();
var StockFields = (function () {
    function StockFields() {
        this.id = 'id';
        this.industry = 'industry';
        this.ipoyear = 'ipoyear';
        this.lastsale = 'lastsale';
        this.marketcap = 'marketcap';
        this.name = 'name';
        this.sector = 'sector';
        this.summary = 'summary';
        this.symbol = 'symbol';
    }
    return StockFields;
}());
exports.StockFields = StockFields;
exports.stockFields = new StockFields();
var CalculatedFields = (function () {
    function CalculatedFields() {
    }
    return CalculatedFields;
}());
exports.CalculatedFields = CalculatedFields;
exports.calculatedFields = new CalculatedFields();
var References = (function () {
    function References() {
        this.id = { tableName: 'stock', primaryKey: 'id', foreignKey: 'id', as: undefined };
    }
    return References;
}());
exports.References = References;
exports.references = new References();
//# sourceMappingURL=sequelize-names.js.map
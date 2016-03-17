"use strict";
var inversify_1 = require("../../node_modules/inversify/source/inversify");
var StockServiceImpl_1 = require("../service/impl/StockServiceImpl");
var ImportStocksCLI_1 = require("./ImportStocksCLI");
var models = require('../domain/sequelize-models');
models.initialize('stocksdb_kl', 'dbuser', 'password', {
    dialect: 'postgres',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});
var kernel = new inversify_1.Kernel();
kernel.bind(new inversify_1.TypeBinding("StockService", StockServiceImpl_1.StockServiceImpl, inversify_1.TypeBindingScopeEnum.Singleton));
var cli = new ImportStocksCLI_1.ImportStocksCLI(kernel);
cli.doFileImport();
//# sourceMappingURL=main.js.map
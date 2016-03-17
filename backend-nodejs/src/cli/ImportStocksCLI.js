"use strict";
var chalk = require('chalk');
var fs = require('fs');
var program = require('commander');
var path = require('path');
var ImportStocksCLI = (function () {
    function ImportStocksCLI(kernel) {
        this.kernel = kernel;
        if (this.kernel) {
            this.stockService = this.kernel.resolve("StockService");
        }
    }
    ImportStocksCLI.prototype.doFileImport = function () {
        var self = this;
        var currentWorkingDir = process.cwd();
        program
            .command('file [file]')
            .action(function (filePath, options) {
            var resolvedPath = "";
            var isValidPath = true;
            resolvedPath = !path.isAbsolute(filePath) ? path.join(currentWorkingDir, filePath) : filePath;
            try {
                isValidPath = fs.lstatSync(resolvedPath).isFile();
            }
            catch (error) {
                isValidPath = false;
            }
            if (isValidPath) {
                self.stockService.importStocksByCSVFile(resolvedPath)
                    .then(function () {
                    console.log("FILE IMPORTED: " + resolvedPath);
                })
                    .catch(function (error) {
                    throw error;
                });
            }
            else {
                throw new Error("invalid path");
            }
        });
        program.parse(process.argv);
    };
    return ImportStocksCLI;
}());
exports.ImportStocksCLI = ImportStocksCLI;
//# sourceMappingURL=ImportStocksCLI.js.map
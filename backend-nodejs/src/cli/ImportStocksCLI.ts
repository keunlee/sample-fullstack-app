import {StockService} from "../service/StockService";

let chalk = require('chalk');
let fs = require('fs');
let program = require('commander');
let path = require('path');

export class ImportStocksCLI {
    public kernel : IKernel;
    private stockService : StockService;

    /**
     *
     * @param kernel
     */
    constructor(kernel : IKernel) {
        this.kernel = kernel;
        if (this.kernel) {
            this.stockService = this.kernel.resolve<StockService>("StockService");
        }
    }

    /**
     *
     */
    public doFileImport() : void {
        let self : ImportStocksCLI = this;
        let currentWorkingDir = process.cwd();

        program
            .command('file [file]')
            .action((filePath, options) => {
                let resolvedPath = "";
                let isValidPath = true;

                resolvedPath = !path.isAbsolute(filePath) ? path.join(currentWorkingDir, filePath) : filePath;

                try {
                    isValidPath = fs.lstatSync(resolvedPath).isFile();
                } catch (error) {
                    isValidPath = false;
                }

                if (isValidPath) {
                    self.stockService.importStocksByCSVFile(resolvedPath)
                        .then(() => {
                            console.log("FILE IMPORTED: " + resolvedPath);
                        })
                        .catch((error : Error) => {
                            throw error;
                        });
                } else {
                    throw new Error("invalid path");
                }
            });

        program.parse(process.argv);
    }
}
import {StockPojo} from "../domain/sequelize-types";

export interface StockService {
    importStocksByCSVFile( file : string ) : Q.Promise<StockPojo[]>;
    findStocksByWildCard( phrase : string ) : Q.Promise<StockPojo[]>;
}
import {StockDto} from "../dto/StockDto";

export interface StockService {
    importStocksByCSVFile( file : string ) : Q.Promise<StockDto[]>;
    findStocksByWildCard( phrase : string ) : Q.Promise<StockDto[]>;
}
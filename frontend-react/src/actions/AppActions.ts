import ThunkInterface = ReduxThunk.ThunkInterface;

import {APP_INIT, FIND_STOCKS_BY_WILDCARD_SUCCESS, GET_STOCK_HISTORICAL_DATA_SUCCESS} from "../constants/App";
import {StockService} from "../services/StockService";

const appInit = (appStarted : boolean) : ThunkInterface => {
    return (dispatch) => {
        dispatch({type : APP_INIT, appStarted : appStarted});
    };
}

const findStocksByWildCard = (value : string) : ThunkInterface => {
    return (dispatch) => {
        StockService.findStocksByWildCard(value)
            .then((result : any) => {
                dispatch({type : FIND_STOCKS_BY_WILDCARD_SUCCESS, options : result});
            })
            .catch((error : Error) => {
                console.log("GOT ERROR");
            });
    };
}

const getHistoricalStockData = ( symbol : string ) : ThunkInterface => {
    return (dispatch) => {
        StockService.getHistoricalStockData(symbol)
            .then((result : any) => {
                dispatch({type : GET_STOCK_HISTORICAL_DATA_SUCCESS, selectedStockData : result});
            })
            .catch((error : Error) => {
                console.log("GOT ERROR");
            });
    }
}

export {
    appInit,
    findStocksByWildCard,
    getHistoricalStockData
}
import ThunkInterface = ReduxThunk.ThunkInterface;

import {
    APP_INIT,
    FIND_STOCKS_BY_WILDCARD_SUCCESS,
    FIND_STOCKS_BY_WILDCARD_INVOKED
} from '../constants/App';
import {StockService} from "../services/StockService";

const appInit = (appStarted : boolean ) : ThunkInterface => {
    return (dispatch) => {
        dispatch({ type: APP_INIT, appStarted : appStarted });
    };
}

const findStocksByWildCard = ( value : string ) : ThunkInterface => {
    return (dispatch) => {
        dispatch({ type: FIND_STOCKS_BY_WILDCARD_INVOKED });

        StockService.findStocksByWildCard( value )
            .then( ( result : any ) => {
                dispatch({ type: FIND_STOCKS_BY_WILDCARD_SUCCESS, options : result });
            })
            .catch( (error : Error) => {
                console.log("GOT ERROR");
            });
        //
    };
}

export {
    appInit,
    findStocksByWildCard
}
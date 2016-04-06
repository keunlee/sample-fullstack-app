import ThunkInterface = ReduxThunk.ThunkInterface;

import {
    APP_INIT
} from '../constants/App';

const appInit = (appStarted : boolean ) : ThunkInterface => {
    return (dispatch) => {
        dispatch({ type: APP_INIT, payload : { appStarted : appStarted } });
        dispatch({ type: 'HELLO_WORLD', payload : {} });
    };
}

export {
    appInit
}
/// <reference path="../../typings/main.d.ts" />

import {
    APP_INIT,
    FIND_STOCKS_BY_WILDCARD_SUCCESS,
    FIND_STOCKS_BY_WILDCARD_INVOKED
} from '../constants/App';

const initialState : any = {
    appStarted : false,
    options : []
};

const appActions = (state : any = initialState, action : any) => {
    if (!action) {
        return initialState;
    }

    switch (action.type) {
        case APP_INIT:
            return Object.assign({}, state, {appStarted: action.appStarted });
        case FIND_STOCKS_BY_WILDCARD_INVOKED:
            return state;
        case FIND_STOCKS_BY_WILDCARD_SUCCESS:
            return Object.assign({}, state, {options: action.options });
        default:
            return initialState;
    }
};

export default appActions;


/// <reference path="../../typings/main.d.ts" />

import {Action} from 'redux-actions';

import {
    APP_INIT
} from '../constants/App';

const initialState : any = {
    appStarted : false
};

const appActions = (state : any = initialState, action : Action) => {
    if (!action) {
        return initialState;
    }

    switch (action.type) {
        case APP_INIT:
            state.appStarted = action.payload.appStarted;
            return state;
        default:
            return initialState;
    }
};

export default appActions;


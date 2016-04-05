/// <reference path="../../typings/main.d.ts" />

import {handleActions, Action} from 'redux-actions';

import {
    APP_INIT
} from '../constants/App';

const initialState : any = {
    appStarted : false
};

export default handleActions<any>({
    [APP_INIT] : (state : any, action : Action) : any => {
        console.log("GOT APP INIT ACTION");
        state.appStarted = action.payload.appStarted;
        return state;
    }
}, initialState);


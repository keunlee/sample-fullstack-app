import {
    APP_INIT
} from '../constants/App';

const initialState: any = {
    appStarted : false
};

export default function finishSetup(state = initialState, action) {
    if (!action) {
        return state
    };

    switch (action.type) {
        case APP_INIT:
            state.appStarted = action.appStarted;
            return state;
        default:
            return state;
    }
}


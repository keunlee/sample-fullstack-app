
import { createAction, Action } from 'redux-actions';

import {
    APP_INIT
} from '../constants/App';

const appInit = createAction<any>(
    APP_INIT,
    (appStarted: boolean) => ({ appStarted })
);

export {
    appInit
}
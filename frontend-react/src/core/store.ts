import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import ThunkInterface = ReduxThunk.ThunkInterface;
import * as reducers from '../reducers/index';
import DevTools from '../core/devtools';

let reducer = combineReducers(reducers);

const Store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        DevTools.instrument() // important -- put this last or it will jack up your middleware
    )
);

export default Store;
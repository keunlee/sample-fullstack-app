/// <reference path="../../typings/main.d.ts" />

import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import { createAction, handleAction, handleActions } from 'redux-actions';

import * as appActionCreators from '../actions/AppActions';

interface IAppProps {
    dispatch : Dispatch
}

class App extends React.Component<IAppProps, {}> {
    private appActions : any;

    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        this.appActions = bindActionCreators(appActionCreators, dispatch);
        this.appActions.appInit();
    }

    public render() {
        return (
            <div>
                <p>HELLO WORLD</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(App);
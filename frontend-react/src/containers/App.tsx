/// <reference path="../../typings/main.d.ts" />

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';
import * as appActionCreators from '../actions/AppActions';
import {IDefaultDispatchProps} from "../properties/IDefaultDispatchProps";
import Dashboard from "./Dashboard";

class App extends React.Component<IDefaultDispatchProps, {}> {
    private appActions : any;

    constructor(props) {
        super(props);
        const {dispatch} = this.props;
        this.appActions = bindActionCreators(appActionCreators, dispatch);
        this.appActions.appInit(true);
    }

    public render() {
        return (
            <Dashboard findStocksByWildCard={null}></Dashboard>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(App);
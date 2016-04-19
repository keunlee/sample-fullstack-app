/// <reference path="../../typings/main.d.ts" />

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as React from "react";
import * as appActionCreators from "../actions/AppActions";
import Dashboard from "./Dashboard";

class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.props.actions.appInit(true);
    }

    public render() {
        return (
            <Dashboard
                findStocksByWildCard={this.findStocksByWildCard}
                options={( this.state && this.state.options )  ? this.state.options : []}>
            </Dashboard>
        );
    }

    public componentWillReceiveProps(newProps : any, oldProps : any) {
        this.setState({
            appStarted : newProps.appStarted,
            options : newProps.options
        });
    }

    private findStocksByWildCard : (value : string) => void = (value : string) => {
        this.props.actions.findStocksByWildCard(value);
    }
}

function mapStateToProps(state : any, nextProps : any) {
    return {
        appStarted : state.App.appStarted,
        options : state.App.options
    };
}

function mapDispatchToProps(dispatch) {
    return {actions : bindActionCreators(appActionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
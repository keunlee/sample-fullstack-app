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
                getHistoricalStockData={this.getHistoricalStockData}
                options={( this.state && this.state.options )  ? this.state.options : []}
                selectedStockData={ (this.state && this.state.selectedStockData) ? this.state.selectedStockData : {} }>
            </Dashboard>
        );
    }

    public componentWillReceiveProps(newProps : any, oldProps : any) {
        this.setState({
            appStarted : newProps.appStarted,
            options : newProps.options,
            selectedStockData : newProps.selectedStockData
        });
    }

    private findStocksByWildCard : (value : string) => void = (value : string) => {
        this.props.actions.findStocksByWildCard(value);
    }

    private getHistoricalStockData : (symbol : string ) => void = ( symbol : string ) => {
        this.props.actions.getHistoricalStockData( symbol );
    }
}

function mapStateToProps(state : any, nextProps : any) {
    return {
        appStarted : state.App.appStarted,
        options : state.App.options,
        selectedStockData : state.App.selectedStockData
    };
}

function mapDispatchToProps(dispatch) {
    return {actions : bindActionCreators(appActionCreators, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
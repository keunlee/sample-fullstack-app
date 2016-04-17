/// <reference path="../../typings/main.d.ts" />

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as React from "react";
import * as appActionCreators from "../actions/AppActions";
import Dashboard from "./Dashboard";

function mapStateToProps(state: any, nextProps : any) {
    console.log("MAP STATE TO PROPS -- APP");
    return {
        appStarted: state.App.appStarted,
        options: state.App.options
    };
}

function mapDispatchToProps(dispatch) {
    console.log("MAP DISPATCH TO PROPS -- APP");
    return { actions: bindActionCreators(appActionCreators, dispatch) }
}

class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.props.actions.appInit(true);
    }

    public render() {
        console.log("APP RENDER");

        return (
            <Dashboard
                findStocksByWildCard={this.findStocksByWildCard}
                options={( this.state && this.state.options )  ? this.state.options : []}>
            </Dashboard>
        );
    }

    public componentWillReceiveProps(newProps : any, oldProps : any) {
        console.log("ON RECIEVE PROPS");
        this.setState({
            appStarted : newProps.appStarted,
            options: newProps.options
        });
    }

    private findStocksByWildCard : (value : string) => void = (value : string) => {
        this.props.actions.findStocksByWildCard(value);
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
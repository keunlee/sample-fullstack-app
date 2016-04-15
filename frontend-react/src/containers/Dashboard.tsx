/// <reference path="../../typings/main.d.ts" />

import * as React from 'react';
import {IDefaultProps} from "../properties/IDefaultProps";
import D3HILOChart from "../components/D3HILOChart";
import TypeAheadOptionTemplate from "../components/TypeAheadOptionTemplate";
let Typeahead = require('react-typeahead-component');

interface IDashboardProps extends IDefaultProps {
    findStocksByWildCard : Function
}

interface IDashboardState {
    inputValue : string,
    options : string[]
}

class Dashboard extends React.Component<IDashboardProps, IDashboardState> {

    constructor(props, context) {
        super(props, context);
        this.state = {
            inputValue: '',
            options: []
        };
    }

    public render() {
        const {findStocksByWildCard} = this.props;

        return (
            <div>
                <h1>Dashboard</h1>
                <Typeahead
                    inputValue={ this.state.inputValue }
                    onChange={this.handleChange}
                    optionTemplate={TypeAheadOptionTemplate}>
                </Typeahead>
                <D3HILOChart></D3HILOChart>
            </div>
        );
    }

    private handleChange : (event : any) => void = (event : any) => {
        let value : string = event.target.value;
        this.setInputValue(value);
    }

    private setInputValue : (value : string) => void = (value : string) => {
        this.setState({
            inputValue : value,
            options : []
        });
    }
}

export default Dashboard;
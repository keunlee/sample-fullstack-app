/// <reference path="../../typings/main.d.ts" />

import * as React from "react";
import D3HILOChart from "../components/D3HILOChart";
import TypeAheadOptionTemplate from "../components/TypeAheadOptionTemplate";
import {Stock} from "../models/Stock";
let Typeahead = require('react-typeahead-component');

export default class Dashboard extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            inputValue : '',
            options : []
        };
    }

    public render() {
        console.log("DASHBOARD RENDER");
        const {options} = this.props;

        return (
            <div>
                <h1>Dashboard</h1>
                <Typeahead
                    inputValue={ this.state.inputValue }
                    options={ options }
                    onChange={ this.handleChange }
                    optionTemplate={ TypeAheadOptionTemplate }
                    onOptionChange={this.handleOptionChange}
                    onOptionClick={this.handleOptionClick}>
                </Typeahead>
                <D3HILOChart></D3HILOChart>
            </div>
        );
    }

    public componentWillReceiveProps(newProps : any, oldProps : any) {
        console.log("ON RECIEVE PROPS");
        this.setState({
            options : newProps.options
        });
    }

    private handleOptionChange : (event : any, option : Stock) => void = (event : any, option : any) => {
        this.setInputValue(option.name);
    }

    private handleOptionClick : (event : any, option : Stock) => void = (event : any, option : any) => {
        this.setInputValue(option.name);
    }

    private handleChange : (event : any) => void = (event : any) => {
        let value : string = event.target.value;
        this.setInputValue(value);
        this.getOptions(value);
    }

    private setInputValue : (value : string) => void = (value : string) => {
        this.setState({
            inputValue : value
        });
    }

    private getOptions : (value : string) => void = (value : string) => {
        this.props.findStocksByWildCard(value);
    }
}
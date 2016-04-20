/// <reference path="../../typings/main.d.ts" />

import * as React from "react";
import CandleStickContainer from "../components/charts/candlestick/CandleStickContainer";
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
        const {options} = this.props;

        return (
            <div className="dashboard">
                <h1>Stock Finder</h1>
                <Typeahead
                    placeholder="Type to search for a stock"
                    inputValue={ this.state.inputValue }
                    options={ options }
                    onChange={ this.handleChange }
                    optionTemplate={ TypeAheadOptionTemplate }
                    onOptionChange={this.handleOptionChange}
                    onOptionClick={this.handleOptionClick}>
                </Typeahead>
                <CandleStickContainer></CandleStickContainer>
            </div>
        );
    }

    public componentWillReceiveProps(newProps : any, oldProps : any) {
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
import * as React from "react";

export default class TypeAheadOptionTemplate extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    public render() {
        var bgColor = null;

        // If this option is currently selected, render it with a green background.
        if (this.props.isSelected) {
            bgColor = {
                backgroundColor: '#c7c7c7'
            };
        }
        return (
            <div style={bgColor}>
                <span>{this.props.data.name} ({this.props.data.symbol})</span>
            </div>
        );
    }
}
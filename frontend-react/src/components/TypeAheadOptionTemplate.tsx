import * as React from 'react';

export default class TypeAheadOptionTemplate extends React.Component<any, any> {
    constructor(props, context) {
        super(props, context);
    }

    public render() {
        var bgColor = null;

        // If this option is currently selected, render it with a green background.
        if (this.props.isSelected) {
            bgColor = {
                color: 'green'
            };
        }
        return (
            <div style={bgColor}>
                <span>{this.props.data.name}</span>
            </div>
        );
    }
}
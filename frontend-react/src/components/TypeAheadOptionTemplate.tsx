import * as React from 'react';
import {IDefaultProps} from "../properties/IDefaultProps";

interface ITypeAheadOptionTemplateProps extends IDefaultProps {
    isSelected : boolean,
    data : any
}

interface ITypeAheadOptionTemplateState {}

class TypeAheadOptionTemplate extends React.Component<ITypeAheadOptionTemplateProps, ITypeAheadOptionTemplateState> {
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
                <p>{this.props.data.name}</p>
            </div>
        );
    }
}
export default TypeAheadOptionTemplate;
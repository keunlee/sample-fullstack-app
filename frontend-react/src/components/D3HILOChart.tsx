import * as React from 'react';
import {IDefaultProps} from "../properties/IDefaultProps";

interface ID3HILOChartProps extends IDefaultProps {}
interface ID3HILOChartState {}

class D3HILOChart extends React.Component<ID3HILOChartProps, ID3HILOChartState> {
    constructor(props, context) {
        super(props, context);
    }

    public render() {
        const {} = this.props;

        return (
            <div>
                <p>HILO Chart Here</p>
            </div>
        );
    }
}
export default D3HILOChart;
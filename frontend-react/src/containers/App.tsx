/// <reference path="../../typings/main.d.ts" />

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

interface IAppProps {
    dispatch : Dispatch
}

class App extends React.Component<IAppProps, {}> {
    constructor(props) {
        super(props);
        const {dispatch} = this.props;

    }

    render() {
        return (
            <div>
                <p>HELLO WORLD</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps)(App);
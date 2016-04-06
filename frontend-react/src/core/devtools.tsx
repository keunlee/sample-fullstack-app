import * as React from 'react';
import {createDevTools} from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

const Devtools = createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-h' changePositionKey='ctrl-q'>
        <LogMonitor />
    </DockMonitor>
);
export default Devtools;
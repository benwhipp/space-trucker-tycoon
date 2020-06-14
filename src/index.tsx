/**
 * App initiator.
 * Global dependencies can be added here, otherwise no changes required
**/

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import {
    ThemeProvider,
} from '@material-ui/core';

import Theme from './assets/theme/theme'

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);
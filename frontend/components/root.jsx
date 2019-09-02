import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <h1>Hello from Root</h1>
            <App />
        </HashRouter>
    </Provider>
);

export default Root;
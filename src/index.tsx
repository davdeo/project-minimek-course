import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { App } from './views/app';
import { configureStore } from './store/configureStore';

const store = configureStore();

const rootElement = document.querySelector('#root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

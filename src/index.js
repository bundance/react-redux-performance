import React from 'react';
import { render } from 'react-dom'
import App from './App';
import './index.css';
import reducer from './state/index';
import initialState from './initial.state';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import Perf from 'react-addons-perf';
window.Perf = Perf;

let store = createStore(
    reducer,
    initialState,
    devToolsEnhancer()
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
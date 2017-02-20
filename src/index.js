import React from 'react';
import { render } from 'react-dom'
import App from './App';
import './index.css';
import reducer from './state/index';
import initialState from './initial.state';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

let store = createStore(
    reducer,
    initialState
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
import {createStore, applyMiddleware, compose } from 'redux';
import combineReducers from './reducers.js';

import promiseMiddleware from './middleware/promiseMiddleware'

let store = createStore(
    combineReducers, 
    compose(
        applyMiddleware(promiseMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f=>f 
    )
);

export default store;

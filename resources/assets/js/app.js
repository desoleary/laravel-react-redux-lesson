
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import { render } from 'react-dom';
import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';

import App from './components/App';

const mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            // Immutable
            state = {
                ...state,  // give all the previous state object and push them into this object
                result: (state.result + action.payload),
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "SUBTRACT":
            state = {
                ...state, // give all the previous state object and push them into this object
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state; // reducer always needs to return a state
};

const userReducer = (state = {
    name: 'Max',
    age: 27
}, action) => {
    switch (action.type) {
        case "SET_NAME":
            // Immutable
            state = {
                ...state,  // give all the previous state object and push them into this object
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state, // give all the previous state object and push them into this object
                age: action.payload
            };
            break;
    }
    return state; // reducer always needs to return a state
};

// Adds middleware
const store = createStore(combineReducers({math: mathReducer, user: userReducer}), {}, applyMiddleware(createLogger())); // Attaching multiple reducers to the store

render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app')
);
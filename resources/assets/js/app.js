
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

require('./components/Example');

import { createStore, combineReducers } from 'redux';

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

const store = createStore(combineReducers({mathReducer, userReducer})); // Attaching multiple reducers to the store

store.subscribe(() => {
   console.log("Store updated!", store.getState())
});

store.dispatch({
    type: 'ADD',
    payload: 100
});

store.dispatch({
    type: 'ADD',
    payload: 22
});

store.dispatch({
    type: 'SUBTRACT',
    payload: 80
});

store.dispatch({
    type: 'SET_AGE',
    payload: 30
});
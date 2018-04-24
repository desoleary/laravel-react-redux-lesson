import {applyMiddleware, combineReducers, createStore} from "redux";
import {createLogger} from "redux-logger";

import math from './reducers/mathReducer'
import user from './reducers/userReducer'

export default createStore(
    combineReducers({
        math: math,
        user: user
    }),
    {},
    applyMiddleware(createLogger()) // Attaching multiple reducers to the store
);
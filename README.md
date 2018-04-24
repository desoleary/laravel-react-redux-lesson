# [Detailed Screencast](https://www.youtube.com/watch?v=qrsle5quS7A)

## Redux
1. Create a store
2. Tell the store who is responsible for the state e.g. pass in reducer
3. Dispatch an action on the store object
4. Dispatched actions is handled by the reducer
5. (optional) subscribe to the store to observe any dispatches

#### Immutable state
1. Simply return a new state object each time

## React Redux
- Provide the defined store to the whole application
```php
render(
    <Provider store={store}>
        <App />
    </Provider>,
    window.document.getElementById('app')
)
```

Need to tell the component
 - which properties of my state in which component
 - which actions I want to dispatch
 - mapStateToProps:  maps application global state to component local properties

 ```php
 const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    };
 }
```

Above taken from store
```php
const store = createStore(
    combineReducers({math: mathReducer, userReducer}),
    {},
    applyMiddleware(logger())
);
```

#### ReactJS Components
- Containers (Smart Components)
  - Hooked into React Redux
  - manages presentation components
  - passes properties to the presentation components

- Presentation Components (Dumb Components)
  - Should not be hooked up
  - think of these as simple templates

#### Async

`$ npm install redux-thunk --save # async lib`

```php
// Configured for async calling
export function setName(name) {
    return dispatch => {
        setTimeout(() => {
            dispatch({
                type: "USER_SET_NAME",
                payload: name
            })
        }, 2000)
    };
}
```

###### Promises
`$ npm install redux-promise-middleware --save`

```php
export function setName(name) {
    return {
        type: 'USER_SET_NAME',
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name)
            }, 1000);
        })
    };
}
```

- Adds new call to action by adding `_FULFILLED` to the action name e.g. USER_SET_NAME to USER_SET_NAME_FULFILLED
- Ensure to change the name in the reducer to include `_FULFILLED`
- Leave action name as `USER_SET_NAME`

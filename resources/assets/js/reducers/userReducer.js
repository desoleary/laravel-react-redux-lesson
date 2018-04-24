const userReducer = (state = {
    name: 'Max',
    age: 27
}, action) => {
    switch (action.type) {
        case "USER_SET_NAME":
            // Immutable
            state = {
                ...state,  // give all the previous state object and push them into this object
                name: action.payload
            };
            break;
        case "USER_SET_AGE":
            state = {
                ...state, // give all the previous state object and push them into this object
                age: action.payload
            };
            break;
    }
    return state; // reducer always needs to return a state
};

export default userReducer;

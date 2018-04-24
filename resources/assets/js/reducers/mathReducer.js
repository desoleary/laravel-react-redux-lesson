const  mathReducer = (state = {
    result: 1,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "MATH_ADD":
            // Immutable
            state = {
                ...state,  // give all the previous state object and push them into this object
                result: (state.result + action.payload),
                lastValues: [...state.lastValues, action.payload]
            };
            break;
        case "MATH_SUBTRACT":
            state = {
                ...state, // give all the previous state object and push them into this object
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            break;
    }
    return state; // reducer always needs to return a state
};

export default mathReducer;

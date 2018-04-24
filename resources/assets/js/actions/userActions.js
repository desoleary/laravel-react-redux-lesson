// Configured for async calling
export function setName(name) {
    return {
        type: 'USER_SET_NAME',
        payload: new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(name)
            }, 500);
        })
    };
}

export function setAge(age) {
    return {
        type: 'USER_SET_AGE',
        payload: age
    };
}
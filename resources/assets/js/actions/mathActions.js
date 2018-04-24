export function add(number) {
    return {
      type: 'MATH_ADD',
      payload: number
    };
}

export function subtract(number) {
    return {
      type: 'MATH_SUBTRACT',
      payload: number
    };
}
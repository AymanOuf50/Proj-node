export const Counter = (state = { value: 0 }, action) => {
    switch (action.type) {
        case 'counter/plus':
            return { value: state.value + 1 };
        case 'counter/moin':
            return { value: state.value - 1 }; // Fixed typo here
        default:
            return state;
    }
};

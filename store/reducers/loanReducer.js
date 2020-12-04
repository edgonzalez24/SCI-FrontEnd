import * as types from '../types/types';

const initialState = {
    loans: []
}
export const loansReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GETLOANS:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}
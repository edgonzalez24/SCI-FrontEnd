import * as types from '../types/types';

const initialState = {
    books: []
}
export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GETBOOK:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}
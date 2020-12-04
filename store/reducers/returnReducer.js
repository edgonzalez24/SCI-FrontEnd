import * as types from '../types/types';

const initialState = {
    returns: []
}
export const returnsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GETRETURNS:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}
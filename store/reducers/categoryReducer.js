import * as types from '../types/types';

const initialState = {
    categories: []
}
export const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GETCATEGORY:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}
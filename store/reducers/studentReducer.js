import * as types from '../types/types';

const initialState = {
    students: []
}
export const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GETSTUDENTS:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}
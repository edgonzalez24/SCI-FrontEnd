import * as types from '../types/types';

const initialState = {
    auths: [],
    auth: {},
    loading: false,
    error: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.POST_AUTH:
            return {
                ...state,
                auths: action.payload,
                loading: false,
                error: null
            }
        default:
            return state
    }
}

import * as types from '../types/types';

const initialState = {
    email: null,
    token: null,
    logged: false,
    isLoading: false
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...action.payload,
                logged: true
            }
        case types.LOGOUT:
            return {
                logged: false
            }
        case types.DEAUTHENTICATE:
            return { token: null };
        case types.FETCH_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}
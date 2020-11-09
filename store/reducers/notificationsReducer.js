import * as types from '../types/types';

const initialState = {
    notifications: []
}
export const notificationsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GETNOTIFICATIONS:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}
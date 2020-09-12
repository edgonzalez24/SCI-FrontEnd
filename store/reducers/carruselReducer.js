import * as types from '../types/types';

const initialState = {
    images: [],
    image: {},
    leading: false,
    error: null
}

export const carruselReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_CARRUSEL:
            return {
                ...state,
                images: action.payload,
                loading: false,
                error: null
            }
        default:
            return state
    }
}
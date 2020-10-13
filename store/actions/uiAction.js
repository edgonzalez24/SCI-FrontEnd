import * as types from '../types/types';


export const startLoading = () => ({
    type: types.UISTARTLOADING
})
export const finishLoading = () => ({
    type: types.UIFINISHLOADING
})

export const setError = (error) => ({
    type: types.UISETERROR,
    payload: error
})
export const unsetError = () => ({
    type: types.UIREMOVEERROR
})
export const setSuccess = (success) => ({
    type: types.UISUCCESS,
    payload: success
})
export const unsetSuccess = () => ({
    type: types.UIREMOVEERROR
})
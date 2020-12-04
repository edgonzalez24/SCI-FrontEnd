import axios from '../../utils/api';
import { finishLoading, setError, setSuccess, startLoading } from './uiAction';
import * as types from '../types/types';

export const getReturns = (currentPage) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.get(`/return/all?pages=${currentPage}`)
            .then((response) => {
                dispatch({
                    type: types.GETRETURNS,
                    payload: response.data
                });
                dispatch(finishLoading());
            })
            .catch((error) => {
                dispatch(setError(error.response.data.message))
                setTimeout(() => {
                    dispatch(setError(null))
                }, 5000);
                dispatch(finishLoading());
            })
    }
}
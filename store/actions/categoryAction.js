import { finishLoading, setError, setSuccess, startLoading } from './uiAction';
import * as types from '../types/types';
import axios from '../../utils/api';

export const getCategory = () => {
    return (dispatch) => {
        axios.get('/category/all')
            .then((response) => {
                dispatch({
                    type: types.GETCATEGORY,
                    payload: response.data
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }
}

export const addCategory = (name_category) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.post(`/category/add`, {
            name_category
        }).then((response) => {
            dispatch(finishLoading());
            dispatch(setSuccess(response.data.message));
            setTimeout(() => {
                dispatch(setSuccess(null));
            }, 5000);
        }).catch(error => {
            dispatch(setError(error.response.data.message))
            setTimeout(() => {
                dispatch(setError(null))
            }, 5000);
            dispatch(finishLoading());
        })
    }
}
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

export const editCategory = (_id, name_category) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.put(`/category/update/${_id}`, {
            name_category
        }).then((response) => {
            dispatch(setSuccess(response.data.message));
            axios.get('/category/all')
                .then((response) => {
                    dispatch({
                        type: types.GETCATEGORY,
                        payload: response.data
                    });
                    dispatch(finishLoading());
                })
                .catch((error) => {
                    console.log(error)
                    dispatch(finishLoading());
                })
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

export const deleteCategory = (id) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.delete(`/category/delete/${id}`)
            .then((response) => {
                dispatch(setSuccess(response.data.message));
                setTimeout(() => {
                    dispatch(setSuccess(null));
                }, 5000);
                axios.get('/category/all')
                    .then((response) => {
                        dispatch({
                            type: types.GETCATEGORY,
                            payload: response.data
                        });
                        dispatch(finishLoading());
                    })
                    .catch((error) => {
                        console.log(error)
                        dispatch(finishLoading());
                    })
            })
            .catch(error => {
                dispatch(setError(error.response.data.message))
                setTimeout(() => {
                    dispatch(setError(null))
                }, 5000);
                dispatch(finishLoading());
            })
    }
}
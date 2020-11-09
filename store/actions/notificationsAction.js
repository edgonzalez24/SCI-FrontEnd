import * as types from '../types/types';
import axios from '../../utils/api';
import { finishLoading, setError, setSuccess, startLoading } from './uiAction';

export const getNotifications = () => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.get('/mail/notifications')
            .then((response) => {
                dispatch({
                    type: types.GETNOTIFICATIONS,
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


export const updateNotification = (id) => {
    return (dispatch) => {
        // dispatch(startLoading());
        axios.put(`/mail/notifications/update/${id}`, {
            status: false
        }).then((response) => {
            axios.get('/mail/notifications')
                .then((response) => {
                    dispatch({
                        type: types.GETNOTIFICATIONS,
                        payload: response.data
                    });
                    // dispatch(finishLoading());
                })
                .catch((error) => {
                    dispatch(setError(error.response.data.message))
                    setTimeout(() => {
                        dispatch(setError(null))
                    }, 5000);
                    // dispatch(finishLoading());
                })
        }).catch((error) => {
            dispatch(setError(error.response.data.message))
            setTimeout(() => {
                dispatch(setError(null))
            }, 5000);
            // dispatch(finishLoading());
        })
    }
}
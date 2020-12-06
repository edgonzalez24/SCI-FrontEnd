import axios from '../../utils/api';
import { finishLoading, setError, setSuccess, startLoading } from './uiAction';
import * as types from '../types/types';
import { getLoans } from './loanAction';

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

export const addReturn = (idStudent, idBook, date_return, id_loan) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.post('/return/add', {
                id_student: idStudent,
                id_book: idBook,
                date_return,
                id_loan,
            })
            .then((response) => {
                dispatch(finishLoading());
                dispatch(setSuccess(response.data.message));
                dispatch(getLoans(1))
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

export const deleteReturn = (id) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.delete(`/return/delete/${id}`)
            .then((response) => {
                dispatch(setSuccess(response.data.message));
                setTimeout(() => {
                    dispatch(setSuccess(null));
                }, 5000);
                dispatch(getReturns())
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
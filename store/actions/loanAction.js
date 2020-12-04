import axios from '../../utils/api';
import { finishLoading, setError, setSuccess, startLoading } from './uiAction';
import * as types from '../types/types';

export const addLoan = (idStudent, idBook, date_loan) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.post('/loan/add', {
                id_student: idStudent,
                id_book: idBook,
                date_loan,
                status: true,
            })
            .then((response) => {
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

export const getLoans = (currentPage) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.get(`/loan/all?pages=${currentPage}`)
            .then((response) => {
                dispatch({
                    type: types.GETLOANS,
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

export const deleteLoan = (id_student, id_book, id_loan) => {
    console.log(id_book);
    return (dispatch) => {
        dispatch(startLoading());
        axios.post('/loan/delete', {
                id_student,
                id_book,
                id_loan,
            })
            .then((response) => {
                dispatch(setSuccess(response.data.message));
                setTimeout(() => {
                    dispatch(setSuccess(null));
                }, 5000);
                dispatch(getLoans(1))
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
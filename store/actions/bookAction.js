import * as types from '../types/types';
import axios from '../../utils/api';
import { finishLoading, setError, setSuccess, startLoading } from './uiAction';

export const addBook = (title, isbn, editor, editorial, datePublication, category) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.post(`/book/add`, {
            title_book: title,
            isbn_book: isbn,
            autor: editor,
            editorial: editorial,
            date_publication: datePublication,
            category: category
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
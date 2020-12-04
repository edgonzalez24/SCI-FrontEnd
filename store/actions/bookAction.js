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
            category: category,
            status: true
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

export const deleteBook = (id) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.delete(`/book/delete/${id}`)
            .then((response) => {
                dispatch(setSuccess(response.data.message));
                setTimeout(() => {
                    dispatch(setSuccess(null));
                }, 5000);
                axios.get('/book/all')
                    .then((response) => {
                        dispatch({
                            type: types.GETBOOK,
                            payload: response.data
                        });
                        dispatch(finishLoading());
                    })
                    .catch((error) => {
                        console.log(error)
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

export const getBook = (currentPage = 1) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.get(`/book/all?pages=${currentPage}`)
            .then((response) => {
                dispatch({
                    type: types.GETBOOK,
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

export const newsBooks = () => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.get('/book/news')
            .then((response) => {
                dispatch({
                    type: types.GETBOOK,
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


export const editBook = (_id, title, isbn, editor, editorial, datePublication, category) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.put(`/book/update/${_id}`, {
            title_book: title,
            isbn_book: isbn,
            autor: editor,
            editorial: editorial,
            date_publication: datePublication,
            category: category
        }).then((response) => {
            dispatch(setSuccess(response.data.message));
            axios.get('/book/all')
                .then((response) => {
                    dispatch({
                        type: types.GETBOOK,
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

export const searchBook = (keyword) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.get(`/book/search?title_book=${keyword}`)
            .then((response) => {
                dispatch({
                    type: types.GETBOOK,
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
export const detailBook = (id) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.get(`/book/detail?id=${id}`)
            .then((response) => {
                dispatch(finishLoading());
                dispatch({
                    type: types.GETBOOK,
                    payload: response.data
                });
            }).catch(error => {
                dispatch(setError(error.response.data.message))
                setTimeout(() => {
                    dispatch(setError(null))
                }, 5000);
                dispatch(finishLoading());
            })
    }
}

export const requestBook = (name, lastname, bookName, isbn) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.post('/mail', {
                name,
                lastname,
                bookName,
                isbn,
                status: true
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
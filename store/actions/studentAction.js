import { finishLoading, setError, setSuccess, startLoading } from './uiAction';
import * as types from '../types/types';
import axios from '../../utils/api';

export const addStudent = (name, lastname, genre, academic_degree, section, teacher) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.post(`/students/add`, {
            name,
            lastname,
            genre,
            academic_degree,
            section,
            teacher,
            loanStatus: false
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


export const getStudents = (currentPage) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.get(`/students/all?pages=${currentPage}`)
            .then((response) => {
                dispatch({
                    type: types.GETSTUDENTS,
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

export const deleteStudent = (id) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.delete(`/students/delete/${id}`)
            .then((response) => {
                dispatch(setSuccess(response.data.message));
                setTimeout(() => {
                    dispatch(setSuccess(null));
                }, 5000);
                axios.get('/students/all')
                    .then((response) => {
                        dispatch({
                            type: types.GETSTUDENTS,
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

export const editStudent = (_id, name, lastname, genre, academic_degree, section, teacher) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.put(`/students/update/${_id}`, {
            name,
            lastname,
            genre,
            academic_degree,
            section,
            teacher,
        }).then((response) => {
            dispatch(setSuccess(response.data.message));
            axios.get('/students/all')
                .then((response) => {
                    dispatch({
                        type: types.GETSTUDENTS,
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

export const searchStudent = (keyword) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.get(`/students/search?name=${keyword}`)
            .then((response) => {
                dispatch({
                    type: types.GETSTUDENTS,
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
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
                console.group(error)
            })
    }
}
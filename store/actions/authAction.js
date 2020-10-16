import Router from 'next/router';
import * as types from '../types/types';
import axios from '../../utils/api';
import { finishLoading, setError, setSuccess, startLoading } from './uiAction';
import { setCookie, removeCookie } from '../../utils/cookie';


export const Login = (email, password) => {
    return (dispatch) => {
        dispatch(startLoading());
        axios.post(`/auth/login`, {
                email: email,
                password: password,
            }).then((response) => {
                const information = response.data
                dispatch(finishLoading());
                dispatch({
                    type: types.LOGIN,
                    payload: {
                        uid: information.uid,
                        name: information.name,
                        lastname: information.lastname,
                        email: information.email,
                        rol: information.rol,
                        token: information.token

                    }
                });
                setCookie('token', information.token);
                Router.push('/inventario/agregar_inventario');
            })
            .catch(err => {
                dispatch(setError('An error has occurred'))
                dispatch(finishLoading());
            });
    }
}

const reauthenticate = (token) => {
    return (dispatch) => {
        dispatch({
            type: types.AUTHENTICATE,
            payload: token
        });
    };
};
export const deauthenticate = () => {
    return (dispatch) => {
        removeCookie('token');
        Router.push('/');
        dispatch({ type: types.DEAUTHENTICATE });
    };
};

export default {
    Login
}
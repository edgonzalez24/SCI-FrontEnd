import * as types from '../types/types';

export const getAuth = () => async dispatch => {
    const res = [{
        id: 123,
        username: 'tuxgonzalez',
        password: 'abc',
        mail: 'edwin.gonzalez@gmail.com'
    }]

    dispatch({
        type: types.POST_AUTH,
        payload: res
    })
}

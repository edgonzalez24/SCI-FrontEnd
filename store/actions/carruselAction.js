// import Axios from 'axios';
import * as types from '../types/types';


export const fetchImages = () => async dispatch => {
    // const res = await axios.get('api/images')
    const Imgs = [{
            url: 'https://paranoidandroid.co/assets/wallpapers/2018/submerged_desktop_thumb.jpg'
        },
        {
            url: 'https://free4kwallpapers.com/uploads/originals/2020/01/08/paint-liquid-abstract--k-wallpaper.jpg'
        },
        {
            url: 'https://cdn.wallpapersafari.com/38/19/X3r5VO.jpg'
        }
    ];
    dispatch({
        type: types.GET_CARRUSEL,
        payload: Imgs
    })
}
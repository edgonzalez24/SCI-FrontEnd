import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { carruselReducer } from './carruselReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    image: carruselReducer,
    auth: authReducer
})



export default persistReducer(persistConfig, rootReducer);

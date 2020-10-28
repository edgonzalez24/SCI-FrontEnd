import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { categoryReducer } from './categoryReducer';
import { bookReducer } from './bookReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    book: bookReducer,
    ui: uiReducer
});

export default persistReducer(persistConfig, rootReducer);
import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { uiReducer } from './uiReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { categoryReducer } from './categoryReducer';
import { bookReducer } from './bookReducer';
import { studentReducer } from './studentReducer';
import { notificationsReducer } from './notificationsReducer';
import { loansReducer } from './loanReducer';
import { returnsReducer } from './returnReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    book: bookReducer,
    student: studentReducer,
    notification: notificationsReducer,
    loan: loansReducer,
    return: returnsReducer,
    ui: uiReducer
});

export default persistReducer(persistConfig, rootReducer);
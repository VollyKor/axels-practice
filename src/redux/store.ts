import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import sagaWatcher from './saga';
import reducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(sagaWatcher);

export default store;

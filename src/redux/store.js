import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { orderReducer } from './reducers/order';
import { productsReducer } from './reducers/products';
import sagaWatcher from './saga';

const reducer = {
    products: productsReducer,
    order: orderReducer,
};

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware(), sagaMiddleware];

const store = configureStore({
    reducer,
    middleware,
    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(sagaWatcher);

export default store;

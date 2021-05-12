import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import sagaWatcher from './saga';

import { orderReducer } from './ducks/order';
import { productsReducer } from './ducks/products';
import { geoReducer } from './ducks/geo';
import { addressReducer } from './ducks/address';

const reducer = {
    products: productsReducer,
    order: orderReducer,
    address: addressReducer,
    geo: geoReducer,
};

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(sagaWatcher);

export default store;
